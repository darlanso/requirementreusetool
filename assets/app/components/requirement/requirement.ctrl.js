
'use strict';

    angular
        .module('app')
        .controller('RequirementCtrl', RequirementCtrl);

    RequirementCtrl.$inject = ['$rootScope','RequirementService','$location','$mdDialog','PrintService'];
    function RequirementCtrl($rootScope,RequirementService,$location,$mdDialog,PrintService) {
        var vm = this;
        this.initial = initial;
        // Go to requirement edit
        this.edit = edit;
        this.cancele = cancele;
        this.show = show;
        //function for requirement        
        this.create = create;
        this.createVersion = createVersion;
        this.update = update;
        this.select = select;
        this.deleteR = deleteR;
        this.getAll = getAll;
        this.findByname = findByname;
        

        this.printRerquirement = printRerquirement;
        vm.valide = true; 
        
        function initial(){
            vm.cancele();
            vm.getAll(); 
        }
                
        function createVersion(){
            this.requirement = vm.requirement; 
            delete this.requirement['id'];
            
            console.log(vm.valide)
            if(vm.valide != false){

                $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Não e possivel salvar novo requisito!')
                    .textContent('Já existe um requisito com mesmo titulo e versão, atualize o campo de versão')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('OK!')
                  //  .targetEvent(ev)
                );
                
            }else{
                RequirementService.requirementPost(this.requirement).success(function(data,status){     
                    $location.path('/requirement');
                    console.log(status)
                }).error(function(data,status){
                    console.log(status)
                });
            }            
            
            RequirementService.requirementVerific(vm.requirement.title,vm.requirement.version).success(function(data,status){
               vm.valide = false;
               console.log(vm.valide)    
            }).error(function(data,status){

                console.log(status)
            });     
        }

        function create(){
            this.requirement = vm.requirement; 
            delete this.requirement['id'];
            
                RequirementService.requirementPost(this.requirement).success(function(data,status){
                $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Novo requisito salvo com sucesso!')
                    .textContent('Requisito:'+vm.requirement.title+' Versão'+vm.requirement.version)
                    .ariaLabel('Alert Dialog Demo')
                    .ok('OK!')
                  //  .targetEvent(ev)
                );     
                    $location.path('/requirement');
                    console.log(status)
                }).error(function(data,status){
                    console.log(status)
                });
                        
    
        }


        function update(){
                    RequirementService.requirementPut(vm.requirement).success(function(data,status){
                        console.log(status)
                        $rootScope.requirement = { }
                        vm.requirement = {};
                        $location.path('/requirement');
                    }).error(function(data,status){
                        console.log(status)
                    });            
        }

        function select(){
            RequirementService.requirementPut(vm.requirement).success(function(data,status){
                
            }).error(function(data,status){
                console.log(status)
            });
        }
        

        function deleteR(requirement){
            var confirm = $mdDialog.confirm()
                .title('Deletar Requisito')
                .textContent('Tem certeza que deseja apagar permanentemente esse requisito?')
                .ok('Sim')
                .cancel('Não');
                $mdDialog.show(confirm).then(function() {
                    RequirementService.requirementDelete(requirement).success(function(data,status){
                        vm.getAll();
                    }).error(function(data,status){
                        console.log(status)
                    });
            
                }, 
                function() {
                });
        }
        
        function getAll(){
            RequirementService.requirementGetAll().success(function(data,status){
                vm.requirements = data;
                $rootScope.requirements = vm.requirements;
            }).error(function(data,status){
                console.log(status)
            });
        }

        function findByname(){
            vm.requirements = {}
            RequirementService.requirementFindByName(vm.title).success(function(data,status){
                vm.requirements = data;
            }).error(function(data,status){
                console.log(status)
            });
        }        

        //router for edit page
        function edit(requirement){
            $rootScope.requirement = requirement
            $location.path('/requirement/edit')                       
        }
        function cancele(requirement){
            $rootScope.requirement = {};
            vm.requirement = {};
            $location.path('/requirement')                       
        }
        function show(requirement){
         $rootScope.requirement = requirement
         $location.path('/requirement/show')
        }
    
        if($rootScope.requirement != undefined){
            vm.requirement = $rootScope.requirement
        }

       vm.showAdvanced = function(ev) {
            $mdDialog.show({
            controller: DialogController,
            controllerAs:'vm',
            templateUrl: 'app/components/requirement/views/dialog1.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: vm.customFullscreen 
            })
            .then(function(answer) {
            vm.status = 'You said the information was "' + answer + '".';
            }, function() {
            vm.status = 'You cancelled the dialog.';
            });
        };



        function DialogController($mdDialog,$rootScope) {
            var vm = this;

            vm.list1 = {title: 'Botão'};
            vm.list2 = {};
           
        } // final do dialog controller

        function printRerquirement(requirement){
             vm.requirement = requirement;
             
            PrintService.print('app/components/templates/requirement.html', {requirement: vm.requirement})
        }

    }