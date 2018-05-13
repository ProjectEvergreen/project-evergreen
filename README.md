# project-evergreen
A frontend repository designed for lean, performant, and sustainable web applications. Inspired by the Poylmer project.

## Objectives
The mission of Project Evergreen is to provide a curated web application starter kit for building dynamic, performant, and evergreen (naturally) web applications that is designed to be easy to understand and intuitive.

The project's motivations are rooted in the belief that applications should be as standards compliant as possible.  In the current web development renassaince, the web platform now gives us so much for free, like:
* Powerful language features like Web Components that captures our preference for clean, component based development
* Long-term, backwards compatibility support from the web platform itself
* Favoring the use of polyfills over frameworks
* Positive developer experiences to support rapid development leveraging familiar tools like Yarn, webpack, and Babel.

Our goals are clear: _Be easy to write, be easy to maintain, and be easy to deploy._  

### Features and Motivations
- Ideal for small to medium dynamic single page applications
- Evergreen tooling to support Evergreen browsers
- Modern JavaScript using ES2015+ (polyfills > frameworks)
- Modern CSS w/Flexbox and CSS Grid
- Web Components Driven Development with state management
- Functional UI Components w/declaritve templating
- Minimal Dependencies (polyfills > frameworks) and boilerplate
- Like with Polymer, "Use the Platform"
- Focus on Developer Experience for rapid development

### Outstanding Items
1. [ ] [Unit testing / E2E Testing](https://github.com/thegreenhouseio/project-evergreen/issues/1)
1. [ ] [Works with Web Components from webcomponents.org]()
1. [ ] [Production JavaScript bundling](https://github.com/thegreenhouseio/project-evergreen/issues/5) (modules vs webpack?)
1. [ ] [CSS Production bundling](https://github.com/thegreenhouseio/project-evergreen/issues/4) (with or without webpack?)
1. [ ] [Routing based code splitting w/ lazy loading](https://github.com/thegreenhouseio/project-evergreen/issues/2)
1. [ ] [Define Evergreen browser support matrix](https://github.com/thegreenhouseio/project-evergreen/issues/3)
1. [ ] [Server Side Rendering support / example](https://github.com/thegreenhouseio/project-evergreen/issues/10)
1. [ ] [Example w/ with Headless CMS](https://github.com/thegreenhouseio/project-evergreen/issues/8)
1. [ ] [Progressive Web Application support / example](https://github.com/thegreenhouseio/project-evergreen/issues/9) 
1. [ ] [Lighthouse compliant](https://github.com/thegreenhouseio/project-evergreen/issues/11)

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