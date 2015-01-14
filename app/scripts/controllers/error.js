'use strict';

/**
 * @ngdoc function
 * @name moneyApp.controller:AboutCtrl
 * @description
 * # CardCtrl
 * Controller of the moneyApp
 */
angular.module('moneyApp')
  .controller('ErrorCtrl', function ($scope) {

  })
  .directive('hideBox', [function(scope,ele,attrs){
  	var hideBox;
  	hideBox = function(){
  		var head = document.getElementsByClassName('header')[0];
  		head.style.display='none';

  	}
  	return{
  		restrict:  'A',
  		link:  hideBox
  	}
  }])

