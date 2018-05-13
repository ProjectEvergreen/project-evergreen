# project-evergreen
A frontend repository designed for lean, performant, and sustainable web applications. Inspired by the [Poylmer](https://www.polymer-project.org/) project.

## Overview

### Mission
The mission of **Project Evergreen** is to provide a web application blueprint for building dynamic, performant, and evergreen (naturally) web applications that are designed to be easy to understand and intuitive to use by both users and developers.

_Be easy to write, be easy to maintain, and be easy to deploy.  Our users will appreciate it._  

### Motivations
The project's motivations are rooted in the fundamental belief that applications should be as standards compliant as possible to maximize the experience for users, developers, and businesses.  Of course we want great user experiences, but we consider that a given as a fundamental result of the time and effort we put into developing our applications in the first place.  

### State of the Web
With the current state of the web platform, we can now look to the web to give us a lot of the tooling and features we have often looked to libraries and frameworks to help us with.  The web is moving towards a persistently progressive app development environment that supports shared values like:
* Having access to powerful language features like Web Components, ES Modules, and Classes that captures our preference for clean, component based development
* Long-term, backwards compatibility support from the web platform itself and interoperability with the JavaScript ecosystem at large
* Favoring the use of polyfills over frameworks, best practices, and modern UI patterns
* Positive developer experiences to support rapid development by working with familiar development tools like Yarn, webpack, Babel, Redux, and more.

### User Experience Goals
Ultimately, our apps need to please our users.  Project Evergreen believes that all apps:
* Lower the barrier to entry for all users
* Only give users what they need, when they need it
* Drive engagement through runtime performance and responsiveness
* Security and Trust

### Objectives
- Ideal for small to medium dynamic single page applications
- Evergreen tooling to support Evergreen browsers
- Modern JavaScript using ES2015+ (polyfills > frameworks)
- Modern CSS w/Flexbox and CSS Grid
- Web Components Driven Development with state management
- Functional UI Components w/declaritve templating
- Minimal Dependencies (polyfills > frameworks) and boilerplate
- Like with Polymer, "Use the Platform"
- Focus on Developer Experience for rapid development

**Note**
Please see our [wiki](https://github.com/thegreenhouseio/project-evergreen/wiki) for information about usage, examples, and more.

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

Thoughts
- WebAssembly example?
- 

## Key Technologies
1. [webpack](https://webpack.js.org/) - Module bundler for building the application
1. [babel](https://babeljs.io/) - Write tomorrow's JavaScript today
1. [postCSS](http://postcss.org/) - Plugin based tooling for writing tomorrow's CSS today
1. [lit-html](https://github.com/Polymer/lit-html) - Runtime library for HTML Templating in JavaScript

## Development
- `yarn build` - build the app
- `yarn develop` - develop locally with live reload
- `yarn serve` - run a production build and serve it locally