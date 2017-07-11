(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
  	$scope.myMessage = "No matter where you go...";
  	$scope.myName = "Casey";
  	$scope.Sum = 234 + 5476;
  });
 
}());