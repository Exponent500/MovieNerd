(function() {
    'use strict';

    angular
        .module('movieNerdApp')
        .factory('movieInfoFactory', movieInfoFactory);

    movieInfoFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function movieInfoFactory($http, $q) { 
        var service = { 
            getOMDBResponse: getOMDBResponse
        };
        return service;

        //pulls movie info from OMDB API, based on movie title or IMDB ID#
        function getOMDBResponse(imdbID, searchString) {
            
        	var defer = $q.defer(); 

            //performing OMDB API GET request
            $http({
            		method: 'GET',
                    url: 'http://www.omdbapi.com/', 
                    params: {
                        s: searchString,
                        i: imdbID,
                        plot: 'full',
                        page: '1',
                        tomatoes: 'true',
                        type: 'movie'                                   
                    }
                })
            	.then(
                    function(response){ 
            			if(typeof response.data === 'object'){  //making sure we get an object back
            				defer.resolve(response); 
            			} else {
            				defer.reject(response); 
            			}
        			},
        			function(error){ //handles OMDB API errors that are returned
                		defer.reject(error); 
                		
        			});

		    return defer.promise;
        	  
        }
    }
})();