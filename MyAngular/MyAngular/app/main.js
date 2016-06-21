(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main)
        .controller('GetAll', getAll);

    function main() {
        var vm = this;
        vm.text = 'Hello world!';
    }

    function getAll($http) {
        var vm = this;
        vm.message = "Hold on"
        $http.get("api/Index").success(function (data) {
            vm.data = data
            vm.message = "Ok"
        })
    }
})();