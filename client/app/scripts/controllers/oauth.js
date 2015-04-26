'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:OauthCtrl
 * @description
 * # OauthCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('OauthCtrl', function ($scope, $location, tracktv) {
    $scope.code = $location.search().code;

    tracktv.getToken ( $scope.code );
  });
