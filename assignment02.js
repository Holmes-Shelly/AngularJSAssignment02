(function(){
'use strict';

angular.module('ShopCheckOffApp', [])
.controller('ShopToBuyController', ShopToBuyController)
.controller('ShopAlreadyBoughtController', ShopAlreadyBoughtController)
.service('ShopCheckOffService', ShopCheckOffService)

ShopToBuyController.$inject = ['ShopCheckOffService'];
function ShopToBuyController(ShopCheckOffService){
	var toBuy = this;
	
	toBuy.items = ShopCheckOffService.getToBuyItems();
	toBuy.buyItem = function(itemIndex){
		ShopCheckOffService.buyItem(itemIndex);
	};
}

ShopAlreadyBoughtController.$inject = ['ShopCheckOffService'];
function ShopAlreadyBoughtController(ShopCheckOffService){
	var alreadyBought = this;
	
	alreadyBought.items = ShopCheckOffService.getAlreadyBoughtItems();
}

function ShopCheckOffService(){
	var service = this;
	
	var toBuyItems = [
	  {name: "cookies", quantity: 100},
	  {name: "cookies'son", quantity: 2000},
	  {name: "cookies'father", quantity: 30},
	  {name: "laobing", quantity: 420},
	  {name: "Bread", quantity: 520},
	];
	var alreadyBoughtItems = [];
	
	service.buyItem = function(itemIndex){
		alreadyBoughtItems.push(toBuyItems[itemIndex]);
		toBuyItems.splice(itemIndex, 1);
	};
	service.getToBuyItems = function(){
		return toBuyItems;
	};
	service.getAlreadyBoughtItems = function(){
		return alreadyBoughtItems;
	};
}
})();
		
	