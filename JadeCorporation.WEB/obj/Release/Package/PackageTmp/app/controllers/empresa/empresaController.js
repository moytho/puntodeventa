'use strict';
app.controller('empresaController', ['$scope', 'empresaService', function ($scope, empresaService) {
    
    var serviceBase = 'http://localhost:64486/';


    $scope.empresas = [];
    
    empresaService.getEmpresas().then(function (results) {
        console.log(results);
        $scope.empresas = results.data;

    }, function (error) {
        console.log(error);
    });

}]);