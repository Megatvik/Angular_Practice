'use strict';
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
});