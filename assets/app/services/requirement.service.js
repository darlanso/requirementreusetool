
'use strict';

    angular
        .module('app')
        .service('RequirementService', RequirementService);

    RequirementService.$inject = ['$http'];
    function RequirementService($http){

            this.requirementPost = requirementPost;
            this.requirementGet = requirementGet;
            this.requirementPut = requirementPut;
            this.requirementGetAll = requirementGetAll;
            this.requirementDelete = requirementDelete;
            this.requirementFindByName = requirementFindByName;
            this.requirementVerific = requirementVerific;
            

            function requirementPost(requirement) { 
                return $http.post('http://localhost:1337/requirement',requirement);
            }

            function requirementGet(requirement) { 
                return $http.get('http://localhost:1337/requirement',requirement);
            }
            
            function requirementGetAll(requirement) { 
                return $http.get('http://localhost:1337/requirement');
            }

            function requirementPut(requirement) { 
                return $http.put('http://localhost:1337/requirement/'+requirement.id,requirement);
            }

            function requirementDelete(requirement) { 
                return $http.delete('http://localhost:1337/requirement?id='+requirement.id);
            }

            function requirementFindByName(title) { 
                return $http.get('http://localhost:1337/requirement?title='+title);
            }
            function requirementVerific(title,version) { 
                return $http.get('http://localhost:1337/requirement?title='+title+"&version="+version);
            }
        }
