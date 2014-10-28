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

			// route for mapyourtap page
			.when('/map', {
				templateUrl : 'pages/map.html',
				controller : 'mapController'
			})
	});

	// create the controller and inject Angular's $scope
	hopscotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.image = 'https://lh6.googleusercontent.com/-JBeBwwUf9y4/VE7QgzF1zaI/AAAAAAAAC_U/5ONGOPTZ3YI/w1774-h1118-no/beers.gif';
	});

	hopscotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Annie Kramer is a proud beer snob with a strong preference for Left Hand Nitro Milk Stout.';
		$scope.image = 'https://lh6.googleusercontent.com/-JBeBwwUf9y4/VE7QgzF1zaI/AAAAAAAAC_U/5ONGOPTZ3YI/w1774-h1118-no/beers.gif';
	});

	hopscotchApp.controller('contactController', function($scope) {
		$scope.message = 'Feel free to drop me a line for infinite brew wisdom!';
		$scope.image = 'http://beerstreetjournal.com/wp-content/uploads/Unita-Yard-Sale1.jpg';
	});

	hopscotchApp.controller('searchController', function($scope) {
		$scope.message = ''
	});

	hopscotchApp.controller('mapController', ['$scope', '$timeout', function($scope, $timeout) {
	    var marker, map;
	    $scope.$on('mapInitialized', function(evt, evtMap) {
	      map = evtMap;
	      marker = map.markers[0];
	    });
	    $scope.centerChanged = function(event) {
	      $timeout(function() {
	        map.panTo(marker.getPosition());
	      }, 3000);
	    }
	    $scope.click = function(event) {
	      map.setZoom(8);
	      map.setCenter(marker.getPosition());
	    }
	  }]);
