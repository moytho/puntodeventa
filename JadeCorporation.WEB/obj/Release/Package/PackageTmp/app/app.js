var app = angular.module('AngularAuthApp', ['ngAnimate','ngRoute', 'LocalStorageModule', 'angular-loading-bar']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });
    $routeProvider.when("/login", {
        redirectTo: function () { window.location = "/login.html"; }
    });
    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/views/autenticacion/signup.html"
    });
    $routeProvider.when("/empresa", {
        controller: "empresaController",
        templateUrl: "/app/views/empresa/empresa.html"
    });
    $routeProvider.when("/sucursal", {
        controller: "sucursalController",
        templateUrl: "/app/views/sucursal/sucursal.html"
    });
    $routeProvider.otherwise({ redirectTo: "/home" });
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});