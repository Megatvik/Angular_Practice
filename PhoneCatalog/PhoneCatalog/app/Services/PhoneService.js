
angular
    .module('app')
    .service('PhoneService', PhoneService);

function PhoneService($http) {

    this.GetPhones = function () {
        // HTTP GET
        // получение всех данных через GET запрос
        var promise = $http.get("api/Phone/").then(function (responce) {
            return responce.data;
        });
        return promise;
    };

    this.PostPhone = function (phone) {
        // HTTP POST
        // Отправка POST запроса для создания новой записи на сервере
        var promise = $http.post("api/Phone/", phone).then(function (phone) {
            return phone.data;
        });
        return promise;
    };

    this.DelPhone = function (phone) {
        // HTTP DELETE
        // отправка DELETE запроса по адресу 
        var promise = $http.delete("api/Phone/" + phone.Id).then(function () {

        });
        return promise;
    };

};
