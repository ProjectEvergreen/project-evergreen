# open-webapp
An opinionated frontend repository ideal for lean and performant web applications

## Objectives
The goal of this project is to help provide non-technical businesses and organizations an opinionated, curated, and simple project starter for building dynamic web applications.  The goals are clear, be easy to write, easy to maintain, and easy to deploy.  

### Features and Motivations
1. Ideal for small / medium dynamic single page applications
1. Modern JavaScript using ES2015+
1. Modern CSS w/Flexbox and CSS Grid
1. Web Component Driven Development with state management targetting modern browsers
1. Functional UI Components w/declaritve templating
1. Minimal Dependencies, avoiding major "vendors" where possibleerf
1. Like with Polymer, "Use the Platform"
1. Progressive Web Application compatible and Lighthouse complient
1. Fast and Performant, built with webpack
1. Server Side Rendering
1. Integration with backends / headless CMS
1. Focus on Developer Experience for rapid development
1. Unit testing / E2E Testing
1. Fully integrates with CI / CD environments
1. Do it all in JS, or with templates / external files (performance considerations?)

All features, configurations and workflows are documented on the [wiki](https://github.com/thegreenhouseio/open-webapp/wiki).

## Key Technologies
1. [webpack](https://webpack.js.org/) - Module bundler for building the application
1. [babel](https://babeljs.io/) - Write tomorrow's JavaScript today
1. [postCSS](http://postcss.org/) - Plugin based tooling for writing tomorrow's CSS today
1. [lit-html](https://github.com/Polymer/lit-html) - Runtime library for HTML Templating in JavaScript

## Development
- `yarn build` - build the app
- `yarn develop` - develop locally with live reload
- `yarn serve` - run a production build and serve it locally