"use strict";
var app = angular.module("ff",[]);
app.factory("MoviesFactory",function($http){
function getMovies(callback){
$http.get("/movies").success(callback);
}
function getMovie(id,callback){
$http.get("/movies/"+id).success(callback);
}
return {
getMovies: getMovies,
getMovie: getMovie
};
});
app.controller("HomeControlller",function($scope,MoviesFactory){
MoviesFactory.getMovies(function(data){
$scope.movies = data;
});
});
