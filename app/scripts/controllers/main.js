'use strict';

/**
 * @ngdoc function
 * @name moneyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moneyApp
 */
angular.module('moneyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
