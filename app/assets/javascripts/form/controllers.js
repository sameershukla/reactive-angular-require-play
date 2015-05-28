/**
 * User controllers.
 */
define([], function() {
	'use strict';
	var FormCtrl = function($scope, $location, $http) {
		$scope.formelements = {};
		$scope.title = "Test";
		$scope.grid = [{first: "sameer", last: "shukla"}];
		$scope.create = function(formelements) {
			$http.post('/form', formelements).success(function(data) {
				console.log(data);
				$scope.grid.push(data);
			}).error(function(data) {
				alert(JSON.stringify(data));
			});
		};
	};
	FormCtrl.$inject = [ '$scope', '$location' , '$http' ];

	return {
		FormCtrl : FormCtrl
	};

});
