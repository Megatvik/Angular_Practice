'use strict';

angular
    .module('app')
    .controller('PhoneController', phoneController);

function phoneController(PhoneService) {
    var vm = this;

    vm.Get = function () {
        PhoneService.GetPhones().then(function (data) { vm.data = data });
    };

    vm.Post = function (item) {
        PhoneService.PostPhone(item).then(function (phone) { vm.Get(); });
    };

    vm.Delete = function (item) {
        PhoneService.DelPhone(item).then(function (responce) { vm.data.splice(vm.data.indexOf(item), 1); });
    };

    vm.Get();
}
