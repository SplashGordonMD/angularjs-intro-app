(function() {
  "use strict";

  angular.module("app").controller("taskCtrl", function($scope) {
  	$scope.task1 = "There you are...";
  	$scope.task2 = "KSE";
  	$scope.task3 = 6734 * 892;
  	$scope.review = "Angular Exercise";
  	$scope.arrays = ["Anybody", "Out", "There"];
  });
 
}());