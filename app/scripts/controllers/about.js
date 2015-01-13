'use strict';

/**
 * @ngdoc function
 * @name moneyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the moneyApp
 */
angular.module('moneyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
