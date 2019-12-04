(function (){
'use strict';
var shoppingList1=[
  "milk","Donuts","Cookies","Chocolate","Peanut Butter","Pepto Bismol",
  "Pepto Bismol(chocolate flavor)", "Pepto Bismol(Cookie flavor)"
];
var shoppingList2=[
  {
    name: "milk",
    quantity:"2"
  },
  {
    name:"Donuts",
    quantity:"200"

  },
  {
    name:"Cookies",
    quantity:"300"
  },
  {
    name:"Chocolate",
    quantity:"5"
  }
];
angular.module('ShoppingListApp',[])
.controller('ShoppingListController',ShoppingListController);
ShoppingListController.$inject=['$scope'];
function ShoppingListController($scope){
  $scope.shoppingList1=shoppingList1;
  $scope.shoppingList2=shoppingList2;
  $scope.addtolist = function(){
    var newitem = {
      name: $scope.itemname,
      quantity: $scope.itemquantity
    };
    $scope.shoppingList2.push(newitem);
  };
}
})();
