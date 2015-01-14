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

  .directive('copyTest', [function(){
  	var copyTest;
  	copyTest = function(scope, ele, attrs){
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
  .directive('deleteCard', [function(){
  	var deleteCard;
  	deleteCard = function(scope, ele, attrs){
  		var deleteBtn = document.getElementById('deleteBtn');
  		var cardType  = document.getElementById('cardNo');
  		deleteBtn.onclick = function(){
  			for(var i = 0; i < customers.length ; i++){
  				console.log('the list is ' + customers[i].cardNo );

  				if(cardNo.innerText === customers[i].cardNo){
  					//destroy the deleted card 
  					customers[i].name = 'no data'
  					customers[i].cardNo = null
  					customers[i].exp = null
  					customers[i].cardType = 'logo'
  					customers[i].address = 'no data'
  					scope.$apply();
  				}
  			}
  			console.log(cardNo.innerText)
  		}
  	}
  	return{
  		restrict: 'A',
  		link: deleteCard
  	}
  }])
  .directive('editCard', [function(){
  	var editCard;
  	editCard = function(scope,ele,attrs){
  		var ogCardNo = document.getElementById('cardNo').innerText;
  		var cardNo = document.getElementById('editCardNo1').value;
  		console.log(ogCardNo);
  		cardNo = '123';
  		console.log(cardNo);
  		
  	}
  	return{
  		restrict: "A",
  		link: editCard
  	}
  }])





// var p = {name: 'blaine ', last: 'gunn'}
// for (var key in p) {
//   if (p.hasOwnProperty(key)) {
//     console.log(key + " -> " + p[key]);
//     p[key] = undefined;
//   }
// }


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
