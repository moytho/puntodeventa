'use strict';
app.factory('empresaService', ['$http', function ($http) {

    var serviceBase = 'http://72.55.164.234/JadeAPI/';
    var empresaServiceFactory = {};

    var _getEmpresas = function () {

        return $http.get(serviceBase + 'api/companies').then(function (results) {
            return results;
        });
    };

    empresaServiceFactory.getEmpresas = _getEmpresas;

    return empresaServiceFactory;

}]);