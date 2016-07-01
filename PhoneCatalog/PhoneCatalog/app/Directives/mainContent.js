'use strict';
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
};