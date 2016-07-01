angular
    .module('app')
    .service('PhoneService', PhoneService);

function PhoneService($http) {

    this.getPhones = function () {
        var promise = $http.get("api/Phone/").then(function (responce) {
            return responce.data;
        });
        return promise;
    };

    this.postPhone = function (phone) {
        var promise = $http.post("api/Phone/", phone).then(function (phone) {
            return phone.data;
        });
        return promise;
    };

    this.delPhone = function (phone) {
        var promise = $http.delete("api/Phone/" + phone.Id).then(function () {

        });
        return promise;
    };

    this.editPhone = function (phone) {
        var promise = $http.put("api/Phone/", phone).then(function () {

        });
        return promise;
    };
};
