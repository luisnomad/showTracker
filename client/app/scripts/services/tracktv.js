'use strict';

/**
 * @ngdoc service
 * @name clientApp.tracktv
 * @description
 * # tracktv
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('tracktv', [ '$http', '$window', '$cookies', function ($http, $window, $cookies) {
    
  	var tracktvApi = {};

	tracktvApi.clientID = "";
	tracktvApi.clientSecret = "";
	tracktvApi.url = "";

	tracktvApi.getCode = function () {
		// http://stackoverflow.com/questions/28265819/oauth-for-personal-use-trakt-tv
		// https://docs.angularjs.org/api/ng/service/$http
		// https://trakt.tv/oauth/applications/4027
		//$http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
		//http://engineering.talis.com/articles/elegant-api-auth-angular-js/
		$window.location.href = tracktvApi.url;
    }

    tracktvApi.getToken = function (code) {
    	var req = {
			method: 'POST',
			url: 'https://trakt.tv/oauth/token',
			header: {
				'Content-type': 'application/json',
				'trakt-api-key': tracktvApi.clientID,
				'trakt-api-version': 2
			},
			data: { 
				'code': code,
				'client_id': tracktvApi.clientID,
				'redirect_uri': "",
				'client_secret': tracktvApi.clientSecret,
				'grant_type' : 'authorization_code'
			}
		};

		$http(req).success(function(data){
			console.log(data);
			$cookieStore.remove( tracktvApi.clientID );
			$cookies.put(tracktvApi.clientID, {});


		}).error(function(error){
			console.log(error);
		});
    }

    return tracktvApi;

  }]);
