'use strict';

angular.module('obbWebAppApp.auth', ['obbWebAppApp.constants', 'obbWebAppApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
