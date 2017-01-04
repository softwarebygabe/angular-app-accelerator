/* eslint-disable */
require('jquery');
var angular = require('angular');
require('angular-material');
require('angular-ui-router');
require('es6-promise').polyfill(); // for using Promises in IE11

// MODULES

// SHARED COMPONENTS
var header = require('./app/components/header/header');

// SERVICES
var appScopeService = require('./app/services/appScope.service.js');
var dataService = require('./app/services/data.service.js');
var dummyDataFactory = require('./app/services/dummyData.factory.js');

// STYLES
require('../node_modules/angular-material/angular-material.css');
require('./index.scss');

// MD ICONS
var mdiconsConfig = require('./mdicons');

// THEME COLORS
var mdThemeConfig = require('./mdTheme');

// ROUTES
var routesConfig = require('./routes');

// PAGES
var homePage = require('./app/pages/home-page/home-page');
var pageOne = require('./app/pages/page-one/page-one');

angular
  .module('app', [
  	'ui.router', 
  	'ngMaterial'
  	])
  .config(routesConfig)
  .config(mdiconsConfig)
  .config(mdThemeConfig)
  .service('appScope', appScopeService)
  .service('dataService', dataService)
  .factory('dummyDataFactory', dummyDataFactory)
  .component('headerBar', header)
  .component('homePage', homePage)
  .component('pageOne', pageOne);
