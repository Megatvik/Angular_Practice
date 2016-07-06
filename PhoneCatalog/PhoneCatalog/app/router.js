'use strict';
angular.module('app').config(function ($stateProvider) {
    $stateProvider
    .state('index', {
        url: "",
        views: {
            "default": { templateUrl: "app/Views/default.html"}
        }
    })
    .state('client',{
        url:"/client",
        views:{
            "default": { templateUrl: "app/Views/client.html"}
        }
    })
    .state('admin', {
        url: "/admin",
        views: {
            "default": { templateUrl: "app/Views/admin.html" }
        }
    })
    .state('default', {
        url: "/default",
        views: {
            "default": { templateUrl: "app/Views/default.html" }
        }
    })
});