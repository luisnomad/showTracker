'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, tracktv) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


 	$scope.authNetwork = function authNetwork() {
 		alert ("");
		var openUrl = tracktv.url;
		window.$windowScope = $scope;
		window.open(openUrl, "Authenticate Account", "width=500, height=500");
   	};

  });
