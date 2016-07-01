'use strict';

angular
    .module('app')
    .controller('PhoneController', phoneController);

function phoneController(PhoneService) {
    var vm = this;
    vm.sortType = 'Name';
    vm.sortReverse = false;
    vm.searshName = '';
    vm.showAddForm = false;
    vm.showEditBtn = false;
    vm.currentItem = {};

    vm.enableEdit = function (item) {
        vm.showEditBtn = true;
        vm.showAddForm = true;
        vm.currentItem.Id = item.Id;
        vm.currentItem.Name = item.Name;
        vm.currentItem.Brand = item.Brand;
        vm.currentItem.ReleaseYear = item.ReleaseYear;
    };

    vm.enableAdd = function () {
        vm.showAddForm = true;
        vm.showEditBtn = false;
        vm.currentItem = {};
    };

    vm.getPhones = function () {
        PhoneService.getPhones().then(function (data) { vm.data = data });
    };

    vm.addNewPhone = function (item) {
        PhoneService.postPhone(item).then(function (phone) { vm.getPhones(); });
    };

    vm.deletePhone = function (item) {
        PhoneService.delPhone(item).then(function (responce) { vm.data.splice(vm.data.indexOf(item), 1); });
    };

    vm.editPhone = function (item) {
        PhoneService.editPhone(item).then(function (responce) { vm.getPhones(); });
    };

    vm.getPhones();
}
