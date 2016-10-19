 (function() {
    'use strict';

    angular
        .module('movieNerdApp')
        .component('moviesearch',{
        	controller: 'movieInfoController',
        	templateUrl: 'app/movies/moviesearch.component.html'
        });
})();

//code reviewed by John Abanto, Tristan and Jesse 