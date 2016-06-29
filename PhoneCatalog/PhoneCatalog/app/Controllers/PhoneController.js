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

    vm.EnableEdit = function (item) {
        vm.showEditBtn = true;
        vm.showAddForm = true;
        vm.currentItem.Id = item.Id;
        vm.currentItem.Name = item.Name;
        vm.currentItem.Brand = item.Brand;
        vm.currentItem.ReleaseYear = item.ReleaseYear;
    };

    vm.EnableAdd = function () {
        vm.showAddForm = true;
        vm.showEditBtn = false;
        vm.currentItem = {};
    };

    vm.Get = function () {
        PhoneService.GetPhones().then(function (data) { vm.data = data });
    };

    vm.Post = function (item) {
        PhoneService.PostPhone(item).then(function (phone) { vm.Get(); });
    };

    vm.Delete = function (item) {
        PhoneService.DelPhone(item).then(function (responce) { vm.data.splice(vm.data.indexOf(item), 1); });
    };

    vm.Edit = function (item) {
        PhoneService.EditPhone(item).then(function (responce) { vm.Get(); });
    };

    vm.Get();
}
