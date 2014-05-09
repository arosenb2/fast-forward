"use strict";
var app = angular.module("ff",[]);
app.factory("MoviesFactory",function($http){
function getMovies(){
return $http.get("/movies");
}
function getMovie(id){
return $http.get("/movies/"+id);
}
return {
getMovies: getMovies,
getMovie: getMovie
};
});
app.controller("HomeControlller",function($scope,MoviesFactory){
$scope.movies = MoviesFactory.getMovies();
});
