'use strict';
app.factory('sucursalService', ['$http', function ($http) {

    var serviceBase = 'http://72.55.164.234/JadeAPI/';
    var sucursalServiceFactory = {};

    var _getSucursales = function () {

        return $http.get(serviceBase + 'api/sucursales').then(function (results) {
            return results;
        });
    };

    sucursalServiceFactory.getSucursales = _getSucursales;

    return sucursalServiceFactory;

}]);