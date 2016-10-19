(function() {
    'use strict';

angular
        .module('movieNerdApp', [
        	'ngMessages', 
        	'toastr',
        	'ui.router',
            'ui.bootstrap'
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
    				onEnter: ['$state', '$uibModal', function($state, $uibModal){ //sets the actions to take when entering into this state
                        $uibModal.open({ // opens a modal when entering this state
                           templateUrl: "app/states/moviesearch.details.html", //sets template to use within the modal
                           size: 'lg', //sets size of modal
                           windowClass: 'container-fluid animated zoomIn' //sets the classes to apply to the modal
                        }).result.finally(function(){ // sets the actions to take when clicking outside of the modal area
                             $state.go('^'); // pushes back to parent state when clicking outside the modal
                       });  
                    }]
    			});
    	});
})();