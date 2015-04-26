'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SignupCtrl', function ($scope, $http, restApi, tracktv) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageSize = 5;

    restApi.getDrivers().success(function (response) {
        //Digging into the response to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        
    });

    restApi.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); 

    $scope.goAuth = function () {
      tracktv.getCode();
    }

  });
