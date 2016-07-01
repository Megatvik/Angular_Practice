'use strict';
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

        templateUrl: 'app/Views/menu.html'
    };
};