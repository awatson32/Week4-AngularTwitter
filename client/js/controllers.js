var controllers = angular.module('myApp.controllers', []);
//controllers go here
controllers.controller('MainController', ['$scope', function($scope) {
    $scope.welcomeMessage = 'Hello World!'; 
    console.log("This part is working!")  
}])
controllers.controller('TweetController', ['$scope', function($scope) {
    
}])