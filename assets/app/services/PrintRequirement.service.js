'use strict'

    angular
        .module('app')
        .service('PrintService', ['$rootScope', '$http', '$timeout', '$compile', function($rootScope, $http, $timeout, $compile) {

    var print = function (templateUrl, data) {
        $http.get(templateUrl).success(function(template){
            var printScope = angular.extend($rootScope.$new(), data);
            var element = $compile($('<div>' + template + '</div>'))(printScope);
            $timeout(function(){
                var newWindow = window.open("");
                newWindow.document.open()
                newWindow.document.write(element[0].innerHTML)
                newWindow.document.close()
            }, 300)
            
        });
    };

    return {
        print: print
    }

}]);