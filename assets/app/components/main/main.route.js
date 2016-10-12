'use strict';

angular.module('app')
  .config(MainRoute);

MainRoute.$inject = ['$stateProvider'];

function MainRoute($stateProvider) {

  $stateProvider
    .state('main', {
    
      url: '/main',
      templateUrl: 'app/components/main/main.tpl.html',
      controller: 'MainCtrl',
      controllerAs:'vm'
    })
}