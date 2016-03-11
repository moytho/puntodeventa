'use strict';
app.controller('loginController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {

    $scope.loginData = {
        Email: "",
        Password: ""
    };

    $scope.message = "";

    $scope.login = function () {
        authService.login($scope.loginData).then(function (response) {

            //$location.path('//#/home');
            window.location.href = "/#/home";
        
        d},
         function (err) {
             $scope.message = err.error_description;
         });
    };

}]);