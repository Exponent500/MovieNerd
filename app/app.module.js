(function() {
    'use strict';

    var app = angular
        .module('movieNerdApp', [
        	'ngMessages', 
        	'toastr',
        	'ui.router'
    	]);

    	app.config (function($stateProvider, $urlRouterProvider){

    		// For any unmatched url, redirect to /state1
    		$urlRouterProvider.otherwise("/search");

    		//Set up the states
    		$stateProvider
    			.state('search', {
					url:"/search",
					templateUrl: "app/partials/search.html",
					controller: 'movieInfoController',
					controllerAs: 'vm'
    			})
    			.state('search.details', {
    				url:"/details:imdbID",
    				templateUrl: "app/partials/search.details.html",
    				controller: 'movieDetailsController',
    				controllerAs: 'vmDetails'
    			});
    	});
})();