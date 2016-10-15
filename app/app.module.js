(function() {
    'use strict';

angular
        .module('movieNerdApp', [
        	'ngMessages', 
        	'toastr',
        	'ui.router'
    	])

    	.config (function($stateProvider, $urlRouterProvider){

    		// For any unmatched url, redirect to /state1
    		$urlRouterProvider.otherwise("/search");

    		//Set up the states
    		$stateProvider
    			.state('moviesearch', {
					url:"/search",
					templateUrl: "app/states/moviesearch.html"
    			})
    			.state('moviesearch.details', {
    				url:"/details:imdbID",
    				templateUrl: "app/states/moviesearch.details.html",
    			});
    	});
})();