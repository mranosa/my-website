'use strict';

angular.module('myWebsiteApp')
	.controller('NavCtrl', function($scope, $location) {

		$scope.navs = [{
			name: 'My Portal',
			url: '#/home',
			icon: 'fa fa-home'
		}, {
			name: 'Purchase Order',
			url: '#/purchaseOrder/list',
			icon: 'fa fa-home'
		}, {
			name: 'Product Booking',
			url: '#/booking',
			icon: 'fa fa-home'
		}, {
			name: 'Load Builder',
			url: '#/builder',
			icon: 'fa fa-home'
		}];

		$scope.updateActiveNav = function() {
			var navs = _.map($scope.navs,
				function(nav) {
					nav.navCls = '';
					if ($location.path() !== '/' && nav.url.indexOf($location.path().split("/")[1]) > -1) {
						nav.navCls = 'active';
					}
				}
			);

			if ($location.path() === '/') {
				$scope.navs[0].navCls = 'active';
			}
		};

		$scope.$on('$locationChangeStart', function(scope, next, current) {
			$scope.updateActiveNav();
		});

	});