(function() {
    'use strict';

    angular
        .module('movieNerdApp')
        .controller('movieInfoController', movieInfoController);

    movieInfoController.$inject = ['$http', 'movieInfoFactory', 'toastr']; 

    /* @ngInject */
    function movieInfoController($http, movieInfoFactory, toastr) {
        var vm = this; 
        vm.movieInfoResults ="";
        vm.getMovieData = getMovieData;
        activate(); 

        ////////////

        function activate() {

        }

        // Get movie info based on the string entered into the Search bar on the search view
       function getMovieData (searchString){
            var imdbID = ""; //ensures we pass an empty string for movieID, when we make our call to the factory
            movieInfoFactory.getOMDBResponse(imdbID, searchString).then( 
        		function(response) { 
            
                    vm.movieInfoResults = response.data.Search;//binds the OMDB API GET request response to the search view
                },

        		function(error){ //creates toastr error messages based on factory error message
                    toastr.error('There was an error');               
			    }
            );
                
        }
    }
})();
