'use strict';

var galleryApp = angular.module('galleryApp', []);

galleryApp.controller('galleryCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('json/photos.json').success(function(data) {
		$scope.photos = data;
	});
	$scope.orderProp = 'order';
}]);
