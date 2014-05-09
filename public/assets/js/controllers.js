"use strict";
var app = angular.module("ff",[]);

app.factory("MoviesFactory",function($http){
  return {
    getMovies: function(){
      return $http.get("/movies");
    },
    getMovie: function(id){
      return $http.get("/movies/"+id);
    }
  }
});

app.controller("HomeControlller",function($scope,MoviesFactory){
  MoviesFactory.getMovies().success(function(data){
    $scope.movies = data;
  });
});
