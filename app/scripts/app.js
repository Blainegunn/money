'use strict';

/**
 * @ngdoc overview
 * @name moneyApp
 * @description
 * # moneyApp
 *
 * Main module of the application.
 */
angular
  .module('moneyApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
    .when('/theCard', {
        templateUrl: 'views/card.html',
        controller: 'CardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
