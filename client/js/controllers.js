var controllers = angular.module('myApp.controllers', []);
//controllers go here
controllers.controller('MainController', ['$scope', '$location', function($scope, $location) {
    $scope.welcomeMessage = 'Hello World!';
    $scope.login = function() {
        console.log('Logging in...');
        $location.path('/tweets');
    }  
}]);    
controllers.controller('TweetController', ['$scope', '$http', function($scope, $http) {
    $scope.getTweets = function() {  
        $http({
            method: 'GET',
            url: '/messages'
        }).then(function success(data) {
            $scope.tweets = data;
        }, function error(data) {
            alert('Cannot load Tweets');
        });
    }
  
}]);
