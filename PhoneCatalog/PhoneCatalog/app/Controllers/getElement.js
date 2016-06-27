
'use strict';

angular
    .module('app')
    .controller('GetElement', getElement);

function getElement($http) {
    var vm = this
    vm.message = "Hold on"
    $http.get("api/Phone/" + 1).then(function (responce) {
        vm.data = responce.data
        vm.message = "Ok"
    },
    function (error) {
        vm.message = "Error!"
    })
}