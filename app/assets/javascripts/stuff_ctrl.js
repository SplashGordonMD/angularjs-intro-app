(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
  	$scope.myMessage = "No matter where you go...";
  	$scope.myName = "Casey";
  	$scope.sum = 234 + 5476;
  });
 
}());