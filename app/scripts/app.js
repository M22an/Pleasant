'use strict';

/**
 * @ngdoc overview
 * @name eyeCheckerApp
 * @description
 * # eyeCheckerApp
 *
 * Main module of the application.
 */
angular
  .module('eyeCheckerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
