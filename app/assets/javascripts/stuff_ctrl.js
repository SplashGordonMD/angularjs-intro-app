(function() {
  "use strict";

  angular.module("app").controller("taskCtrl", function($scope) {
  	$scope.task1 = "Hey you, can you help them to berry the stone...";
  	$scope.task2 = "Casey's review of Peter Jangs intro to Angular";
  	$scope.task3 = 144 / 12;
  	$scope.loops = ["Just", "one", "more", "morning" ];
  	$scope.review = "Angular Exercise";
  	$scope.arrays = ["Anybody", "Out", "There"];

  	$scope.addTask = function() {
 	  console.log("Me an my RC");
  	}
  });
 
}());