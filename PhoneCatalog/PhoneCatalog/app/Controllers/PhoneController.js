'use strict';

angular
    .module('app')
    .controller('phoneController', phoneController);

function phoneController(PhoneService) {
    var vm = this;
    vm.sortType = 'Name';
    vm.sortReverse = false;
    vm.searshName = '';
    vm.isLoading = true;

    vm.getPhones = function () {
        vm.isLoading = true;
        PhoneService.getPhones().then(function (data) { vm.data = data });
        vm.isLoading = false;
    };

    vm.addNewPhone = function (item) {
        vm.isLoading = true;
        PhoneService.postPhone(item).then(function (phone) { vm.getPhones(); });
        vm.isLoading = false;
    };

    vm.deletePhone = function (item) {
        PhoneService.delPhone(item).then(function (responce) { vm.data.splice(vm.data.indexOf(item), 1); });
    };

    vm.editPhone = function (item) {
        vm.isLoading = true;
        PhoneService.editPhone(item).then(function (responce) { vm.getPhones(); });
        vm.isLoading = false;
    };
    vm.getPhones();
}
