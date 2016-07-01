'use strict';
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
};