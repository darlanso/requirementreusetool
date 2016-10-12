
    'use strict';

angular.module('app', ['ngMaterial','ui.router','ngDragDrop'])

.config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider
          .otherwise('main');
  }]);