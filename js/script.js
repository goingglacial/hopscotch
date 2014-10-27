	// create the module and name it hopscotchApp
	var hopscotchApp = angular.module('hopscotchApp', ['ngRoute', 'ngMap']);

	// configure our routes
	hopscotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			// route for the search page
			.when('/search', {
				templateUrl : 'pages/search.html',
				controller : 'searchController'
			})

			// route for mapit page
			.when('/map', {
				templateUrl : 'pages/map.html',
				controller : 'mapController'
			})
	});

	// create the controller and inject Angular's $scope
	hopscotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Tap kegs from east to west!';
		$scope.image = 'http://hugelike.com/wp-content/uploads/2013/07/us-states-beer.jpg';
	});

	hopscotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Annie Kramer is a proud beer snob with a strong preference for Left Hand Milk Stout. Thanks, Colorado!';
		$scope.image = 'http://hugelike.com/wp-content/uploads/2013/07/us-states-beer.jpg';
	});

	hopscotchApp.controller('contactController', function($scope) {
		$scope.message = 'Feel free to drop me a line for infinite brew wisdom!';
		$scope.image = 'http://hugelike.com/wp-content/uploads/2013/07/us-states-beer.jpg';
	});

	hopscotchApp.controller('searchController', function($scope) {
		$scope.message = ''
	});

	hopscotchApp.controller('mapController', function($scope) {
		$scope.message = ''
		$scope.center = {
			latitude: 37.09024,
			longitude: -95.712891
		};
		$scope.zoom = 4;
		$scope.fit = true;
	});