define([], function () {
    'use strict';

    angular.module('app.yangman').controller('TypeBooleanCtrl', TypeBooleanCtrl);

    TypeBooleanCtrl.$inject = ['$scope'];

    function TypeBooleanCtrl($scope){
        var yangTypeBolean = this;

        $scope.$watch('node.value', function(){
            if ( typeof $scope.node.value !== 'boolean' && $scope.node.value.length) {
                $scope.node.value = $scope.node.value === 'true';
            }
        });
    }
});

