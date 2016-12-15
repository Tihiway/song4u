'use strict';

var songApp = angular.module('songdownloader', ['ui.router']);

songApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state(
        {
            name: 'home',
            url: '/',
            templateUrl: 'view/home.html'
        }
    ).state(
        {
            name: 'search',
            url: '/search',
            templateUrl: 'view/search.html',
            controller: 'SearchController.js'

        }
    );
}]);
