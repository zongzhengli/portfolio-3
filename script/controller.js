var app = angular.module("mainApp", ['ngAnimate']);

app.controller("Controller", function ($scope) {

    // Initialize fields. 
    $scope.showMain = true;
    $scope.showNBody = false;
    $scope.showZero = false;
    $scope.showThreads = false;
    $scope.showFlocking = false;
    $scope.showLattice = false;
    $scope.showMatrix = false;

    // Declare helper functions. 
    function resetAll() {
        $scope.showMain = false;
        $scope.showNBody = false;
        $scope.showZero = false;
        $scope.showThreads = false;
        $scope.showFlocking = false;
        $scope.showLattice = false;
        $scope.showMatrix = false;
    };

    // Declare controller functions. 
    $scope.mainClick = function () {
        resetAll();
        $scope.showMain = true;
    }

    // Declare controller functions. 
    $scope.nBodyClick = function () {
        resetAll();
        $scope.showNBody = true;
    }

    $scope.zeroClick = function () {
        resetAll();
        $scope.showZero = true;
    }

    $scope.threadsClick = function () {
        resetAll();
        $scope.showThreads = true;
    }

    $scope.flockingClick = function () {
        resetAll();
        $scope.showFlocking = true;
    }

    $scope.latticeClick = function () {
        resetAll();
        $scope.showLattice = true;
    }

    $scope.matrixClick = function () {
        resetAll();
        $scope.showMatrix = true;
    }
});
