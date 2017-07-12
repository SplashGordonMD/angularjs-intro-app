/* global angular */

(function() {
  angular.module("app").controller("tasksCtrl", function($scope) {
  	$scope.tasks = [ 
  	  "No Body Home",
  	  "Confortable Numb", 
  	  "The Trial", 
  ];

  	$scope.addTask = function(inputTask) {
  	  if (inputTask !=='')	{
  		$scope.tasks.push(inputTask);
  		$scope.newTask = '';
  	 } else {
  	 	console.log(inputTask);
  	 }	
    };
  });
})(); 