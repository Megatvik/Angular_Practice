'use strict';

angular
    .module('app')
    .controller('viewController', viewController);

function viewController() {
    var vm = this;
    vm.default = true;
    vm.client = false;
    vm.admin = false;
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
        vm.currentItem.Description = item.Description;
        vm.currentItem.Image = item.Image;
    };

    vm.enableAdd = function () {
        vm.showAddForm = true;
        vm.showEditBtn = false;
        vm.currentItem = {};
    };
}