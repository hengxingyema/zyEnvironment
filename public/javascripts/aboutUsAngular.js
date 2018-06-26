/**
 * Created by apple on 7/3/16.
 */
var app = angular.module("myApp", []);
var navIndex = 1;

app.controller('scrollHide', ['$scope', function($scope, $window) {
    $scope.showUp = true;
    var heightOfNav = 51;
    var height = $(window).innerHeight() - heightOfNav;
    console.log(height);
    //detect scroll
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll> 50 || scroll==undefined){
            $scope.showUp = false;
        }else{
            $scope.showUp = true;
        }
        $scope.$apply();
    });
}]);