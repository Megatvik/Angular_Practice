'use strict';

angular
    .module('app')
    .controller('userController', userController);

function userController() {
    var vm = this;
    vm.isLogin = false;
    vm.login = function (user) {

        vm.isLogin = true;

    };
    vm.exit = function () {

        vm.isLogin = false;

    }
}