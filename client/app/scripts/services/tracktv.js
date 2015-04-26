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

	tracktvApi.clientID = "2bb74bdcd4436c4fa76e1755cb0b19e3f0068f112a785ef59e1e668d39841683";
	tracktvApi.clientSecret = "aa64f1a3b478c372192ba6f8ad13b0bfcf8623b60a9ce3910a443209a8a3eae6";
	tracktvApi.url = "https://trakt.tv/oauth/authorize?client_id=" + tracktvApi.clientID + "&redirect_uri=http%3A%2F%2Fwww.luisnomad.com%3A9000%2Ftracktv-success&response_type=code";

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
				'redirect_uri': "http://www.luisnomad.com:9000/tracktv-success",
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
