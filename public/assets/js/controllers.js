"use strict";
var app = angular.module("ff",[]);
app.factory("MoviesFactory",function($http){
function getMovies(){
$http.get("/movies");
}
function getMovie(id){
$http.get("/movies/"+id);
}
return {
getMovies: getMovies,
getMovie: getMovie
};
});
app.controller("HomeControlller",function($scope,MoviesFactory){
$scope.movies = MoviesFactory.getMovies().success(data){
return data;
};
});
