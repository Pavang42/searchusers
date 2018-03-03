//<reference path="angular.js">

var app = angular.module("searchApp",[])
	.controller("searchController", function($scope, $http){
		var data;
		$http({
			method: 'GET',
			url: 'https://api.github.com/users'
		}).then(function successCallback(response) {
			data = response.data;
			
		}, function errorCallback(response) {
			
		})
		$scope.searchUsers = function(){
			var searchUser = $scope.searchUser;
			var found = 0;
			$scope.error_message = false;
			data.forEach(function(entry){
				if(found == 0){
					if(entry.login == searchUser){
						found = 1;
						$scope.error_message = false;
						var date = new Date('2009-04-02');
						$scope.userFound = true;
						$scope.avatar_url = entry.avatar_url;
						$scope.followers = entry.followers;
						$scope.following = entry.following;
						$scope.created_at = date.toString();
						$scope.repos_url = entry.repos_url;
						}
					if(found == 0){
						$scope.userFound = false;
						$scope.error_message = true;
					}
				}
			});
		}
		$scope.loadRepos = function(url){
			window.location.href = $scope.repos_url;
		}	
});