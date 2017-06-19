function down(){
  $(".down").toggle();
}
// TODO NG模块
var app = angular.module('self-Service', ['ng', 'ngRoute']);
// app.config(function ($routeProvider) {
//   $routeProvider
//     .when('/dashboard', {templateUrl: 'tpl/dashboard.html', controller: 'dbCtrl'})
//     .when('/usercenter', {templateUrl: 'tpl/usercenter.html', controller: 'ucCtrl'})
//     .when('/salary', {templateUrl: 'tpl/salary.html', controller: 'salaryCtrl'})
//     .when('/usermanaging', {templateUrl: 'tpl/usermanaging.html', controller: 'umCtrl'})
//     .when('/login', {templateUrl: 'tpl/login.html', controller: 'logCtrl'})
//     .otherwise({redirectTo: '/login'});
// });
app.controller("myctrl",function($scope,$location){
  $scope.url = $location.absUrl();
  console.log($scope.url);
});
