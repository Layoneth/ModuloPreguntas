'use strict';

angular.module('preguntasApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
.config(['$stateProvider','$urlRouterProvider', '$httpProvider' ,function($stateProvider,$urlRouterProvider, $http) {
	$urlRouterProvider.otherwise('/');

	$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

	$stateProvider
		.state('main',{
			url:'/',
			templateUrl:'views/main.html',
			controller:'main'
		});


}]);
