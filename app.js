var app = angular.module('pollMe', ['ngRoute', 'ngAnimate', 'ngResource', 'ngCookies', 'ngTouch', 'ngSanitize']);

app.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/home.html',
				controller: 'mainCtrl'
			}).
			when('/featured', {
				templateUrl: 'partials/featured.html',
				controller: 'featuredCtrl'
			}).
			when('/create', {
				templateUrl: 'partials/create.html',
				controller: 'createCtrl'
			}).
			when('/browse', {
				templateUrl: 'partials/browse.html',
				controller: 'browseCtrl'
			}).
			when('/login', {
				templateUrl: 'partials/login.html',
				controller: 'loginCtrl'
			}).
			otherwise({
				redirectTo: 'partials/home.html'
			});
	}]);