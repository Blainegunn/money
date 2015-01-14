'use strict';

/**
 * @ngdoc function
 * @name moneyApp.controller:AboutCtrl
 * @description
 * # CardCtrl
 * Controller of the moneyApp
 */
angular.module('moneyApp')
  .controller('CardCtrl', function ($scope) {
  	$scope.card = customers
  })

  .directive('copyTest', [function(scope, ele, attrs){
  	var copyTest;
  	copyTest = function(){
  		console.log('turrtle')
  		var copyBtn = document.getElementById('copyBtn');
  		copyBtn.onclick = function(){
  			var copyCardNo = document.getElementById('cardNo').innerText;
  			console.log(copyCardNo);
  			//copy(copyCardNo);
  		};
  	}
  	return{
  		restrict: 'A',
  		link: copyTest

  	}
  }])


var customers = [
	{
		name: 'Blaine Rene Gunn',
		cardNo: '3434 34523 8260 2325',
		exp: '1/17',
		cardType: 'visa',
		address: ' 286 I Street  \n SLC, UT 84103 '
	},
	{
		name: 'John Adamson',
		cardNo: '5634 7075 8131 8008',
		exp: '3/15',
		cardType: 'MC',
		address: '340 E 12300 S  \n Draper, UT 84503 '
	},
	{
		name: 'Neymar dos Santos ',
		cardNo: '9343 5676 1313 5357',
		exp: '8/16',
		cardType: 'AMEX',
		address: '245 Bulldog Blvd. \n Provo, UT 84604'
	},
	{
		name: 'Toni Kroos',
		cardNo: '9453 1234 1243 0454',
		exp: '12/20',
		cardType: 'Discover',
		address: '340 E 12300 S  \n Logan, UT 84503 '
	}
]; 
