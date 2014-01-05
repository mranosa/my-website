'use strict';

angular.module('myWebsiteApp')
	.controller('SuperCtrl', function($scope, $timeout) {
		$scope.showIcon = false;
		$scope.showNav = false;
		$scope.showView = false;
		$scope.hideLoading = false;

		$timeout(function() {
			$scope.showIcon = true;
			$scope.showNav = true;
			
			$timeout(function() {
				$scope.hideLoading = true;			
				$timeout(function() {
					$scope.showView = true;
				}, 500);
			}, 500);
			
		}, 1000);
	});