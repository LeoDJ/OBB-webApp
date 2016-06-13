'use strict';

angular.module('obbWebAppApp', ['obbWebAppApp.auth', 'obbWebAppApp.admin', 'obbWebAppApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
