pipeline {
  agent any

  environment {
    AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
    AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
    AWS_CLOUDFRONT_DISTRIBUTION_ID = credentials('jenkins-aws-cloudfront-distribution-id-project-evergreen')
  }

  tools {
    nodejs "node-8.9.4"
  }

  parameters {
    booleanParam(
      defaultValue: false, 
      description: 'Production Release toggle', 
      name: 'IS_PRODUCTION_RELEASE'
    )
  }

  stages {
    
    stage('Prep') {
      steps {
        sh "yarn install"
      }
    }

    // TODO
    // stage('Test') {
    //   steps {
    //     sh "echo testing.."
    //     sh "yarn test --coverage"

    //     publishHTML target: [
    //       allowMissing: false,
    //       alwaysLinkToLastBuild: false,
    //       keepAll: false,
    //       reportDir: 'reports/test-coverage',
    //       reportFiles: 'index.html',
    //       reportName: 'Coverage Report'
    //     ]
    //   }
    // }

    stage('Build') {
      steps {
        sh "yarn build"
      }
    }

    stage('Deploy') {
      when {
        expression { 
          return BRANCH_NAME == 'master' && IS_PRODUCTION_RELEASE == 'true'
        }
      }
      steps {
        sh "echo deploying to PROD"
        sh "yarn release"
      }
    }

  }
}