'use strict';

angular.module('preguntasApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('main',{
			url:'/',
			templateUrl:'views/main.html',
			controller:'main'
		});


}]);
