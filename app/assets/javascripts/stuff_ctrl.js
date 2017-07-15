/* global angular */

(function() {
   "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
  	$scope.Message = "Good Morning July 15, 2017!!!"; 
  	$scope.Name = "Casey Platt";
  	$scope.sum = 432 + 987654;
  	$scope.reviews = ["Good & Tasty", "Bad & Ugle", "Indeferent, take it of leave it"];  

  	$scope.addReview = function(inputText) {
  		$scope.reviews.push(inputText);
  		
  	 }; 

     $scope.isPositive = function(inputReviewText) {
       if (inputReviewText.indexOf("bad") === -1){
         return true;
       } else {
         return false;
       }
     };
    }());
   
