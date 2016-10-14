
'use strict';

    angular
        .module('app')
        .service('RequirementService', RequirementService);

    RequirementService.$inject = ['$http','API'];
    function RequirementService($http,API){

            this.requirementPost = requirementPost;
            this.requirementGet = requirementGet;
            this.requirementPut = requirementPut;
            this.requirementGetAll = requirementGetAll;
            this.requirementDelete = requirementDelete;
            this.requirementFindByName = requirementFindByName;
            this.requirementVerific = requirementVerific;
            

            function requirementPost(requirement) { 
                return $http.post(API.url+'requirement',requirement);
            }

            function requirementGet(requirement) { 
                return $http.get(API.url+'requirement',requirement);
            }
            
            function requirementGetAll() { 
                return $http.get(API.url+'requirement');
            }

            function requirementPut(requirement) { 
                return $http.put(API.url+'requirement/'+requirement.id,requirement);
            }

            function requirementDelete(requirement) { 
                return $http.delete(API.url+'requirement?id='+requirement.id);
            }

            function requirementFindByName(title) { 
                return $http.get(API.url+'requirement?title='+title);
            }
            function requirementVerific(title,version) { 
                return $http.get(API.url+'requirement?title='+title+"&version="+version);
            }
        }
