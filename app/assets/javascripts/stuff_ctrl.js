(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
  	$scope.reviews = [ 
  		{task: "No Body Home", side: 2, reviewer: "Chewwy"},
  		{task: "Confortable Numb", side: 3, reviewer: "Hagan"},
  	    {task: "The Trial", side: 4, reviewer: "Ox"},
  	    ];

  	$scope.addReview = function(inputTask) {
  		$scope.reviews.push(inputTask);
  	$scope.addReview = function(inputTask, inputSide, inputName) {
  		var newReview = {task: inputTask, side: inputSide, name: inputName};
 	  $scope.reviewss.push(inputReview);
  	};

    $scope.isPositive = function(inputReviewTask) {
    	return (inputReviewTask.indexOf("bad") === -1);
    $scope.isPositive = function(inputReview) {
    	return  (inputReview.Task.indexOf("bad") === -1);
  };
 });