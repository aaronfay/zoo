var zooApp = angular.module('zooApp', []);

(function (app) {
  "use strict";
  app.controller('ZooController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'The Zoo'
    $scope.animals = [];

    $scope.getMeSomeAnimals = function () {
      // note to viewers: this should really be in a service factory
      $http.get('/aminals')
        .then(function(response) {
            $scope.animals = response.data
        })
    }
  }]);
})(zooApp)