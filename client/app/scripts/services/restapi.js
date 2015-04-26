'use strict';
// http://www.toptal.com/angular-js/a-step-by-step-guide-to-your-first-angularjs-app
/**
 * @ngdoc service
 * @name clientApp.restApi
 * @description
 * # restApi
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('restApi', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    };

    ergastAPI.getDriverRaces = function(id) {
    	id = "vettel";
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    };

    return ergastAPI;


  });
