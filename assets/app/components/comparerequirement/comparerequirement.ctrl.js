'use strict'

    angular
        .module('app')
        .controller('RequirementCompareCtrl', RequirementCompareCtrl);

    RequirementCompareCtrl.$inject = ['$rootScope','RequirementService','$location','$mdDialog','PrintService'];
    function RequirementCompareCtrl($rootScope,RequirementService,$location,$mdDialog,PrintService){
        var vm = this;
        this.findByname = findByname;
        this.compareX = compareX;
        this.compareY = compareY;
        this.printRerquirement = printRerquirement;

        function findByname(){
            console.log("function ok!")
            vm.requirements = {}
            RequirementService.requirementFindByName(vm.title).success(function(data,status){
                vm.requirements = data;
            }).error(function(data,status){
                console.log(status)
            });
        }

        function compareX(requirement){
            vm.requirementX = requirement;
        }
        function compareY(requirement){
            vm.requirementY = requirement;            
            
        }

         function printRerquirement(requirement){
             vm.requirement = requirement;
             console.log(vm.requirement);
            PrintService.print('app/components/templates/requirement.html', {requirement: vm.requirement})
        }

    }
