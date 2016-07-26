'use strict';
angular
    .module('app')
    .directive('userControl', userControl);

function userControl() {
    return {

        restrict: 'E',
        replace: true,
        scope: true,

        link: function ($scope, $element, $attrs) {

        },

        templateUrl: 'app/Views/common/userControl.html'
    };
};