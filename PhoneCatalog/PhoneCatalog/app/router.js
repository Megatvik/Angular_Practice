
'use strict';

angular.module('app').config(function ($stateProvider) {
    //$urlRouterProvider.otherwise('/');

    $stateProvider
    .state('index', {
        url: "",
        views: {
            "header": { templateUrl: "app/Views/header.html"},
            "menu": { templateUrl: "app/Views/menu.html"},//, controller: "PhoneController as phone" },
            "content": { templateUrl: "app/Views/content.html"},//, controller: "PhoneController as phone" },
            "footer": { templateUrl: "app/Views/footer.html" }
        }
    })
});