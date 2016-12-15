'use strict'

songApp.service('LinksService',function ($scope,$http)
{
   var self=this;
   var songs=[];
    self.getAllSongs = function(){

        $http.get("GetLinks.php").then(function (response) {
           songs.push(response.data);
        });
      }




});