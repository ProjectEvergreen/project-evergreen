const AWS = require('aws-sdk');
const fs = require('fs');
const glob = require('glob');

const s3 = new AWS.S3(); // eslint-disable-line no-unused-vars
const cloudfront = new AWS.CloudFront();

// ENVIRONMENT CONFIGURATION
const BUILD_OUTPUT_DIR = 'build'; // eslint-disable-line no-unused-vars

// AWS CONFIGURATIONS
const AWS_REGION = 'us-east-1';
const AWS_S3_BUCKET = 'project-evergreen.thegreenhouse.io';

const AWS_CLOUDFRONT_DISTRIBUTION = {
  ID: process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID,
  INVALIDATION_KEY: 'index.html',
  INVALIDATION_PATHS: ['/index.html']
};

AWS.config.region = AWS_REGION;

// helpful for simple debugging
// s3.listBuckets(function(err, data) {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     for (var index in data.Buckets) {
//       let bucket = data.Buckets[index];
//       console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
//     }
//   }
// });

// uploads the build directory to S3, our "main method"
glob(`./${BUILD_OUTPUT_DIR}/**/**`, function (er, files) {
  for (let i = 0, l = files.length; i < l; i += 1) {
    const filename = files[i];
    const s3Filename = filename.replace(`./${BUILD_OUTPUT_DIR}/`, '');

    // upload only files
    if (s3Filename.indexOf('.') > 0) {
      const extension = filename.slice(filename.lastIndexOf('.'));
      const contentType = getContentType(extension);
      const body = fs.readFileSync(filename); // .pipe(zlib.createGzip());

      const s3 = new AWS.S3({
        params: {
          Bucket: AWS_S3_BUCKET,
          Key: s3Filename,
          ContentType: contentType,
          ACL: 'public-read'
        }
      });

      s3.upload({ Body: body }).on('httpUploadProgress', httpUploadProgress).send(httpUploadSend);
    }
  }
});

// mainly here so there's something fun to see in the jenkins build 
function httpUploadProgress(evt) {
  console.log(evt); // eslint-disable-line no-console
}

// watches for index.html upload and triggers a cache bust in cloudfront
function httpUploadSend(err, data) {
  console.log(err, data); // eslint-disable-line no-console
  // trigger an invalidation to cache bust the site on each release
  if (!err && data.key === AWS_CLOUDFRONT_DISTRIBUTION.INVALIDATION_KEY) {
    invalidateCloudfrontDistribution();
  }
}

// creates an invalidatation in cloudfront for /index.html for cache busting on each release
function invalidateCloudfrontDistribution() {
  const timestamp = new Date().getTime();
  const paths = AWS_CLOUDFRONT_DISTRIBUTION.INVALIDATION_PATHS;

  const params = {
    DistributionId: AWS_CLOUDFRONT_DISTRIBUTION.ID,
    InvalidationBatch: {
      CallerReference: `jenkins-release-${timestamp}`,
      Paths: { 
        Quantity: paths.length, 
        Items: paths
      }
    }
  };
  
  cloudfront.createInvalidation(params, function(err, data) {
    const invalidationObjectKey = AWS_CLOUDFRONT_DISTRIBUTION.INVALIDATION_KEY;

    if (err) {
      console.log(`FAILED: on ${invalidationObjectKey} invalidation request`); // eslint-disable-line no-console
      console.log(err, err.stack); // eslint-disable-line no-console
      console.log(data); // eslint-disable-line no-console
    } else { 
      console.log(`SUCCESS: for ${invalidationObjectKey} invalidation request`); // eslint-disable-line no-console
    }
  });
}

// appropriately set objects content-type when uploading build to S3
function getContentType(extension) {
  let contentType = '';

  switch (extension) {

    case '.eot':
      contentType = 'application/vnd.ms-fontobject';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.js':
      contentType = 'application/javascript';
      break;
    case '.otf':
      contentType = 'application/x-font-opentype';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;
    case '.ttf':
      contentType = 'application/x-font-ttf';
      break;
    case '.woff':
      contentType = 'application/font-woff';
      break;
    case '.woff2':
      contentType = 'application/font-woff2';
      break;
    default:
      contentType = 'text/' + extension.replace('.', '');
      break;

  }

  return contentType;
}