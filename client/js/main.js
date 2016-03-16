angular.module('myApp', ['myApp', 'ngroute'])
.controller('MainController', ['$scope', function($scope) {
    $scope.welcomeMessage = 'Hello World!'; 
    console.log("This part is working!")  
}])
.controller('TweetController', ['$scope', function($scope) {
    
}])

.config(['$routeProvider', function($routeProvider) {
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

