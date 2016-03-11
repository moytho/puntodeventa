'use strict';
app.controller('sucursalController', ['$scope', 'sucursalService', function ($scope, sucursalService) {
    
    var serviceBase = 'http://localhost:64486/';


    $scope.sucursales = [];
    
    sucursalService.getSucursales().then(function (results) {
        console.log(results);
        $scope.sucursales = results.data;

    }, function (error) {
        console.log(error);
    });

}]);