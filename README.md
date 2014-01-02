# Backbone/Marionette/RequireJS Advanced App Generator

> A [Yeoman](http://yeoman.io) generator for advanced Backbone/Marionette/RequireJS web applications.

## Overview

This Yeoman Generator allows you to quickly get started building advanced web applications using the following stack:

- [RequireJS](http://requirejs.org/docs/start.html)
- [Backbone](http://backbonejs.org/#introduction)
- [Backbone.Marionette](https://github.com/marionettejs/backbone.marionette/wiki)
- [Handlebars](http://handlebarsjs.com/)

### Why Advanced?

The typical backbone folder structure breaks a project up into Models, Collections and Views. This can become a problem when creating larger modular applications, each with thier own set of Models, Collections and Views. 

This Generator creates a logical, modular structure from which you can build large scale applications. Essentially namespaces.

## Getting Started

### Requirements

- [Node.js >= 0.8.0](http://nodejs.org/)
- [Grunt ~0.4.0](http://gruntjs.com/getting-started)
- [GIT CLI](http://git-scm.com/downloads)

Install [Yeoman](https://github.com/yeoman/yo):

    npm install -g yo`

Install [Bower](https://github.com/bower/bower)

    npm install -g bower

### Usage

Install the Generator

    npm install -g https://github.com/mgmilcher/generator-bbappadvanced/archive/master.tar.gz

Make a new directory, and `cd` into it:

    mkdir my-new-project && cd $

Run `yo bbappadvanced` to begin a new build.

Run `grunt` for building and `nodemon` for preview

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)