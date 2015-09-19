var app = angular.module("mainApp", ['ngAnimate']);

app.controller("controller", [ '$scope', '$sce', function($scope, $sce) {
    for (var i = 0 ; i < pages.length; i++) {
    	pages[i].description = $sce.trustAsHtml(pages[i].description);
    }

    $scope.pages = pages;
    $scope.activeId = pages[0].id;

    $scope.changePage = function (id) {
        $scope.activeId = id;
    }
}]);
