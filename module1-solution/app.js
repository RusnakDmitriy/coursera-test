(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject=['$scope'];
    
    function LunchCheckController($scope){
        $scope.listOfFood="";
        $scope.messageAfterChecking="";
        $scope.LunchCheck=function(){
            var msg="";
            $scope.messageAfterChecking=msg;
        };
    })
})();