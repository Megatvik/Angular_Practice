'use strict';

angular
    .module('app')
    .controller('PhoneController', phoneController);

function phoneController($http) {
    var vm = this

    vm.sortType = 'Name';
    vm.sortReverse = false;
    vm.searshName = '';
    vm.showNewForm = false;
    vm.refresh = function () {
        // HTTP GET
        // получение всех данных через GET запрос
        $http.get("api/Phone/").then(function (responce) {
            vm.data = responce.data
        },
    function (error) {
        vm.message = "Error!"
    });
    }

    vm.create = function (item) {
        // HTTP POST
        // Отправка POST запроса для создания новой записи на сервере
        $http.post("api/Phone/", item).then(function (item) {
            //vm.data.push(item);
            vm.refresh();
        });
    }

    vm.delete = function (item) {
        // HTTP DELETE
        // отправка DELETE запроса по адресу 
        $http({
            method: "DELETE",
            url: "api/Phone/" + item.Id
        }).success(function () {
            vm.data.splice(vm.data.indexOf(item), 1);
        });
    }
    vm.refresh();
}
