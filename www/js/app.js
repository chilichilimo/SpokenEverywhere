// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
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
