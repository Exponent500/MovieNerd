(function() {
    'use strict';

    angular
        .module('movieNerdApp')
        .controller('movieDetailsController', movieDetailsController);

    movieDetailsController.$inject = ['$http', 'movieInfoFactory', 'toastr', '$stateParams'];

    /* @ngInject */
    function movieDetailsController($http, movieInfoFactory, toastr, $stateParams) {
        var vmDetails = this;
        vmDetails.movieDetails = '';
        vmDetails.getMovieDescription = getMovieDescription;
        
        var imdbID = $stateParams.imdbID; // stores IMDB ID# so we can make the appropriate "Request by ID" GET request to OMDB API
        
        activate();

        ////////////////

        function activate() {
        	getMovieDescription(imdbID);
        }

        // gets movie info based on IMDB ID#
       function getMovieDescription (imdbID){
            var searchString = ""; //ensures that an empty string is passed for movieName, when we call the getMovieInfo factory
            
            // grabs the OMDB API response to our HTTP GET request, so we can display the movie details to the details view
            movieInfoFactory.getOMDBResponse(imdbID, searchString).then( 
        		function(response) { 
            
                    vmDetails.movieDetails = response.data; //binds the OMDB API GET request response to the movie details view
                },

        		function(error){ //creates toastr error messages based on factory error messages
                    toastr.error('There was an error');               
			    }
            );
                
        }
    }
})();