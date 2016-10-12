'use strict';

angular.module('app')
  .config(RequirementCompare);

RequirementCompare.$inject = ['$stateProvider','$mdThemingProvider'];

function RequirementCompare($stateProvider, $mdThemingProvider) {

  $stateProvider
    .state('requirementcompare', {
      url: '/requirement/compare',
      templateUrl: 'app/components/comparerequirement/comparerequirement.tpl.html',
      controller: 'RequirementCompareCtrl',
      controllerAs:'vm'
    })
   
}