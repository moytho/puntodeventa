'use strict';
app.controller('homeController', ['$scope', 'authService', '$location', function ($scope, authService, $location) {
    $scope.estaAutenticado = authService.authentication;
    if ($scope.estaAutenticado.isAuth == false) $location.path('/login');
}]);