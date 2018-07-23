// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
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
});

app.config(function($stateProvider, $urlRouterProvider,$httpProvider){
  
      //Intercepta las petciones realizadas por $resource
      $httpProvider.interceptors.push(function($q) {
        return {
          'responseError': function(response) {
            if (response.status == 400) {
             
            }
            if (response.status == 500) {
              //console.log(response.headers("Error")); 
            }
            // Always reject (or resolve) the deferred you're given
            return $q.reject(response);
          },
          // optional method
          'request': function(config) {
            // do something on success
            //console.log(config);
            return config;
          }
        };
      });
  
      $stateProvider
        .state('inicio', {
          url: '/inicio',
          templateUrl: 'views/inicio.html',
          controller: 'InicioController'
        })
        .state('pregunta1', {
          url: '/pregunta1',
          templateUrl: 'views/pregunta1.html',
          controller: 'Pregunta1Controller'
          })
        .state('pregunta2', {
          url: '/pregunta2',
          templateUrl: 'views/pregunta2.html',
          controller: 'Pregunta2Controller'
        })
        .state('pregunta3', {
          url: '/pregunta3',
          templateUrl: 'views/pregunta3.html',
          controller: 'Pregunta3Controller'
        })
        .state('pregunta4', {
          url: '/pregunta4',
          templateUrl: 'views/pregunta4.html',
          controller: 'Pregunta4Controller'
        })
        .state('pregunta5', {
          url: '/pregunta5',
          templateUrl: 'views/pregunta5.html',
          controller: 'Pregunta5Controller'
        })
        .state('pregunta6', {
          url: '/pregunta6',
          templateUrl: 'views/pregunta6.html',
          controller: 'Pregunta6Controller'
        })
        .state('pregunta7', {
          url: '/pregunta7',
          templateUrl: 'views/pregunta7.html',
          controller: 'Pregunta7Controller'
        })
        .state('pregunta8', {
          url: '/pregunta8',
          templateUrl: 'views/pregunta8.html',
          controller: 'Pregunta8Controller'
        })
        .state('agradecimiento', {
          url: '/agradecimiento',
          templateUrl: 'views/agradecimiento.html',
          controller: 'AgradecimientoController'
        })
        ;

  
  
      $urlRouterProvider.otherwise('/inicio');
  });
