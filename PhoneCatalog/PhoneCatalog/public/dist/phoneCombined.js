'use strict';
angular.module('app', ['ui.router']);;'use strict';

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
        vm.currentItem.Description = item.Description;
        vm.currentItem.Image = item.Image;
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
;'use strict';
angular
    .module('app')
    .directive('addNew', addNew);

function addNew() {
    return {

        restrict: 'EA',
        replace: true,
        scope: true,

        link: function ($scope, $element, $attrs) {

        },

        templateUrl: 'app/Views/addNew.html'
    };
};;'use strict';
angular
    .module('app')
    .directive('mainContent', mainContent);

function mainContent() {
    return {

        restrict: 'EA',
        replace: true,
        scope: true,

        link: function ($scope, $element, $attrs) {

        },

        templateUrl: 'app/Views/content.html'
    };
};;'use strict';
angular
    .module('app')
    .directive('mainMenu', mainMenu);

function mainMenu() {
    return {

        restrict: 'EA',
        replace: true,
        scope: true,

        link: function ($scope, $element, $attrs) {

        },

        templateUrl: 'app/Views/newMenu.html'
    };
};;'use strict';
angular.module('app').config(function ($stateProvider) {
    $stateProvider
    .state('index', {
        url: "",
        views: {
            "header": { templateUrl: "app/Views/header.html"},
            "menu": { templateUrl: "app/Views/menu.html"},
            "content": { templateUrl: "app/Views/content.html"},
            "footer": { templateUrl: "app/Views/footer.html" }
        }
    })
});;angular
    .module('app')
    .service('PhoneService', PhoneService);

function PhoneService($http) {

    this.getPhones = function () {
        var promise = $http.get("api/Phone/").then(function (responce) {
            return responce.data;
        });
        return promise;
    };

    this.postPhone = function (phone) {
        var promise = $http.post("api/Phone/", phone).then(function (phone) {
            return phone.data;
        });
        return promise;
    };

    this.delPhone = function (phone) {
        var promise = $http.delete("api/Phone/" + phone.Id).then(function () {

        });
        return promise;
    };

    this.editPhone = function (phone) {
        var promise = $http.put("api/Phone/", phone).then(function () {

        });
        return promise;
    };
};
