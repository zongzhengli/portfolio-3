var app = angular.module("mainApp", ['ngAnimate']);

app.controller("controller", function ($scope) {
    $scope.pages = pages;
    $scope.activeId = pages[0].id;

    $scope.changePage = function (id) {
        $scope.activeId = id;
    }
});
