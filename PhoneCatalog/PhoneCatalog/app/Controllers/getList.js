
'use strict';

angular
    .module('app')
    .controller('GetList', getList);

function getList($http) {
    var vm = this
    vm.message = "Hold on"
    $http.get("api/Phone").then(function (responce) {
        vm.data = responce.data
        vm.message = "Ok"
    },
    function (error) {
        vm.message = "Error!"
    })
}