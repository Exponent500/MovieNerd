 (function() {
    'use strict';

    angular
        .module('movieNerdApp')
        .component('moviesearchresults',{
        	controller: 'movieDetailsController',
        	templateUrl: 'app/movies/moviesearchresults.component.html'
        });
})();