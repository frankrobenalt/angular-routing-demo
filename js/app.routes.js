angular.module('routing').config(function($stateProvider, $urlRouterProvider) {
    
      $urlRouterProvider.otherwise('/');
    
      $stateProvider
        .state('home', {
          templateUrl: '../views/home.html',
          url: '/',
          controller: 'homeCtrl'
        })
        .state('characters', {
          url: '/characters',
          controller: 'characterCtrl',
          templateUrl: '../views/characters.html',
          // because we want to retrieve all characters in the ng-repeat
          resolve: {
            characters: function(characterSrvc) {
              return characterSrvc.getCharacters().then(function(response){
                return response;
              });
            }
          }
        })
        .state('character', {
          url: '/character/:charID',
          controller: 'detailsCtrl',
          templateUrl: '../views/details.html'
        })
    });