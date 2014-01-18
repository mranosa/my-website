'use strict';

angular.module('myWebsiteApp')
	.controller('NavCtrl', function($scope, $location) {

		$scope.navs = [{
			name: 'Blog and Rants',
			url: '#/blog',
			icon: 'fa fa-files-o'
		}, {
			name: 'Work Experience',
			url: '#/work',
			icon: 'fa fa-calendar'
		}, {
			name: 'Project History',
			url: '#/project',
			icon: 'fa fa-briefcase'
		}, 
		// {
		// 	name: 'Tech Skills',
		// 	url: '#/skill',
		// 	icon: 'fa fa-pencil-square-o'
		// }, 
		{
			name: 'About Me',
			url: '#/about',
			icon: 'fa fa-meh-o'
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