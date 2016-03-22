/*global angular*/
var app = angular.module('myApp',['ionic']).config(['$controllerProvider', function($controllerProvider) {
  $controllerProvider.allowGlobals();
}]);
var login = getElementById("login");
var user = getElementById("user").value;
var password = getElementById("password").value;

  // if (user = "maya" && password = "hello")
  // {
  //     login.onclick=function(){
  //       location.replace("text.html");
  //     };
  // }
  app.controller("myCtrl",function($scope, $window) {
    $scope.logingIn = function() {
      $window.location("text.html");
    }
  };
