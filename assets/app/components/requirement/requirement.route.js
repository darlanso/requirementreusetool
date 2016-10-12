'use strict';

angular.module('app')
  .config(RequirementRoute);

RequirementRoute.$inject = ['$stateProvider','$mdThemingProvider'];

function RequirementRoute($stateProvider, $mdThemingProvider) {

  $stateProvider
    .state('requirement', {
      url: '/requirement',
      templateUrl: 'app/components/requirement/requirement.tpl.html',
      controller: 'RequirementCtrl',
      controllerAs:'vm'
    })
    .state('requirementnew', {
      url: '/requirement/new',
      templateUrl: 'app/components/requirement/views/new.tpl.html',
      controller: 'RequirementCtrl',
      controllerAs:'vm'
    })
    .state('requirementshow', {
      url: '/requirement/show',
      templateUrl: 'app/components/requirement/views/show.tpl.html',
      controller: 'RequirementCtrl',
      controllerAs:'vm'
    })
    .state('requirementedit', {
      url: '/requirement/edit',
      templateUrl: 'app/components/requirement/views/edit.tpl.html',
      controller: 'RequirementCtrl',
      controllerAs:'vm'
    })
    // Configure a dark theme with primary foreground yellow 
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
}