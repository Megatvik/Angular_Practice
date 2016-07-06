'use strict';

angular
    .module('app')
    .controller('viewController', viewController);

function viewController() {
    var vm = this;
    vm.default = true;
    vm.client = false;
    vm.admin = false;
}