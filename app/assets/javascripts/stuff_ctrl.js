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
  	 } 
    };
    $scope.completeTask = function(inputTask) {
     var index = $scope.tasks.indexOf(inputTask);
     if (index > -1) {
       $scope.tasks.splice(index, 1);	
    };
   };
  }); 
})(); 