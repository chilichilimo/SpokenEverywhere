// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('myApp',['ionic']).config(['$controllerProvider', function($controllerProvider) {
  $controllerProvider.allowGlobals();
}]);

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
  var usersRef = new Firebase("https://spoken-everywhere.firebaseio.com/users/");
})

.config(function($stateProvider, $urlRouterProvider)
{
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'home.html',
    controller: 'LoginCtrl'
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
    templateUrl: 'signup.html',
    controller: 'SignUp'
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

.controller('SignUp', function($scope ,$location){
  $scope.signup = function(){
    console.log("Hello");
      signupEmail = $scope.email;
      signupPassword = $scope.password;
      signupFirstName = $scope.firstname;
      signupLastName = $scope.lastname;
      signupAge = $scope.age;
      console.log(signupFirstName);
      usersRef.createUser({
        email: signupEmail,
        password: signupPassword
      }, function(error, userData){
        if (error) {
          console.log("Error creating user:", error);
          alert(error);
        }
        else {
          console.log("Successfully created user account with uid:", userData.uid);
          var uid = userData.uid;
          var newUserRef = new Firebase("https://spoken-everywhere.firebaseio.com/users/" + uid);
          console.log("https://spoken-everywhere.firebaseio.com/users/" + uid);
          newUserRef.set({
            firstname: signupFirstName,
            surname: signupLastName,
            age: signupAge
          });
        }
        //$(location).attr('href', 'welcome.html');
      });
      $location.path("/welcome");
  }
})

.controller('LoginCtrl', function($location, $scope) {
	$scope.login = function() {
    var givenEmail = $scope.loginEmail;
    var givenPassword = $scope.loginPassword;
    console.log(givenEmail);
    ref.authWithPassword({
      email    : givenEmail,
      password : givenPassword
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $location.path("/mainhome");
      }
    });
	};
})

var usersRef = new Firebase("https://spoken-everywhere.firebaseio.com/users");
var ref = new Firebase("https://spoken-everywhere.firebaseio.com/");

  //$(document).ready(function(){
  // $("#signUpFormButton").click(function(){
  //   var signupFirstName = $("#newFirstName").val();
  //   var signupLastName = $("#newLastName").val();
  //   var signupAge = $("#newAge").val();
  //   var signupEmail = $("#newEmail").val();
  //   var signupPassword = $("#newPassword").val();
  //   var signupConfirmPassword = $("#newConfirmPassword").val();
  //   if (signupPassword === signupConfirmPassword) {
  //   usersRef.createUser({
  //         email: signupEmail,
  //         password: signupPassword
  //     }, function(error, userData){
  //       if (error) {
  //         console.log("Error creating user:", error);
  //         alert(error);
  //       }
  //       else {
  //         console.log("Successfully created user account with uid:", userData.uid);
  //         var uid = userData.uid;
  //         var newUserRef = new Firebase("https://spoken-everywhere.firebaseio.com/users/" + uid);
  //         console.log("https://spoken-everywhere.firebaseio.com/users/" + uid);
  //         newUserRef.set({
  //           firstname: signupFirstName,
  //           surname: signupLastName,
  //           age: signupAge
  //         });
  //       }
  //         $(location).attr('href', 'welcome.html');
  //     });
  //     //window.location = "welcome.html";
  //     // newUser.child('email').on("value", function(snapshot) {
  //     //     console.log(snapshot.val());
  //     // }, function (errorObject) {
  //     // console.log("The read failed: " + errorObject.code);
  //     // });
  //     //$location.path('/welcome');
  //
  //   }
  //   else {
  //     alert("Passwords are not the same! Please try again.");
  //   }
  // });

  // $("#loginButton").click(function(){
  //   console.log("imIn!");
  //   var loginEmail = $("#userEmail").val();
  //   var loginPassword = $("#userPassword").val();
  //   ref.authWithPassword({
  //     email    : "afshar.m.95@gmail.com",
  //     password : "hello123"
  //   }, function(error, authData) {
  //     if (error) {
  //   console.log("Login Failed!", error);
  //   } else {
  //   console.log("Authenticated successfully with payload:", authData);
  //   }
  //   });
  // });
  //});
