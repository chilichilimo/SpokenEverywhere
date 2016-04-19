// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('myApp',['ionic']).config(['$controllerProvider', function($controllerProvider) {
  $controllerProvider.allowGlobals();
}]);

// var myAppApp = angular.module('myAppApp',[])

angular.module('starter', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider)
{
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'home.html'
  })
  .state('index', {
    url: '/index',
    templateUrl: 'index.html'
  })
  .state('text', {
    url: '/text',
    templateUrl: 'text.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'signup.html'
  })
  .state('welcome', {
    url: '/welcome',
    templateUrl: 'welcome.html'
  })
  .state('mainhome', {
    url: '/mainhome',
    templateUrl: 'mainhome.html'
  })
  .state('settings', {
    url: '/settings',
    templateUrl: 'settings.html'
  })
  $urlRouterProvider.otherwise('/home');
})
.controller('welcome',[$scope, $location, function($scope, $location){
  console.log("I'm in now!");
}]);

var users = new Firebase('https://spoken-everywhere.firebaseio.com/users');
var books = new Firebase('https://se-books.firebaseio.com/books/0');

// app.controller('MyController', function($scope){
//   $scope.user = {
//     'firstname':"Maya"
//   }
// });

$(document).ready(function(){

  $("#signUpFormButton").click(function(){
    var signupFirstName = $("#newFirstName").val();
    var signupLastName = $("#newLastName").val();
    var signupAge = $("#newAge").val();
    var signupEmail = $("#newEmail").val();
    var signupPassword = $("#newPassword").val();
    var signupConfirmPassword = $("#newConfirmPassword").val();
    if (signupPassword === signupConfirmPassword) {
      users.push().set({
            email: signupEmail,
            firstname: signupFirstName,
            surname: signupLastName,
            age: signupAge,
            password: signupPassword
      });
      //console.log("I'm out");
      //window.location = "welcome.html";

      $location.path('/welcome');
      $(location).attr('href', 'welcome.html');
    }
    else {
      alert("Passwords are not the same! Please try again.");
    }
  })
});


// users.push().set({
//       email: "afshar.m.95@gmail.com",
//       firstname: "Maya",
//       surname: "Afshar",
//       age: 20
// });
// users.push().set({
//     email: "voila@whatever.com",
//     firstname: "voila",
//     surname: "whatever",
//     age: 24
// });

// users.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

// users.set("I'm writing data", function(error) {
//   if (error) {
//     alert("Data could not be saved." + error);
//   } else {
//     alert("Data saved successfully.");
//   }
// });
