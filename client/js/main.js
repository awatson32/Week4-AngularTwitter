var app = angular.module('myApp', ['myApp.controllers', 'ngRoute'])
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'MainController'
    })
    .when('/tweets', {
        templateUrl: 'views/tweets.html',
        controller: 'TweetController'
    });
}]);

