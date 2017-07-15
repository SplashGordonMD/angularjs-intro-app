/* global angular */

(function() {
  angular.module("app").controller("stuffCtrl", function($scope) {
  	$scope.myMessage = "Good Morning July 12.2017!!!"; 
  	$scope.myName = "Casey Platt";
  	$scope.sum = 432 + 987654;
  	$scope.reviews = ["Good", "Bad", "Indeferent"];  

  	$scope.addReview = function(inputText) {
  		$scope.reviews.push(inputText);
  		
  	 }; 
    });
   
