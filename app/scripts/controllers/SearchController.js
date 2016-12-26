'use script'
songApp.controller('SearchController',['$scope','LinksService',function ($scope,LinksService){


$scope.linkovi = LinksService.getAllSongs();
}]);