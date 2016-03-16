var controllers = angular.module('myApp.controllers', []);
//controllers go here
controllers.controller('MainController', ['$scope', function($scope) {
    $scope.welcomeMessage = 'Hello World!';  
}]);    
controllers.controller('TweetController', ['$scope', '$http', function($scope, $http) {
    $http.get('/messages').success(function(data) {
        $scope.messages = data;
    });
}]);
