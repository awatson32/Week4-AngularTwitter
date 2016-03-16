var app = angular.module('myApp', ['myApp.controllers', 'ngroute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'MainController'
    })
    .when('/tweets', {
        templateUrl: 'views/tweets.html',
        controller: 'TweetController'
    });
}]);