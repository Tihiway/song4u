'use strict'

songApp.service('LinksService',function ($http)
{
    var self = this;
    var songs = [];
    $http.get("app/api/getLinks.php").then(function (response) {
        songs.push(response.data);
    });
    self.getAllSongs = function(){
        return songs;
        };
});