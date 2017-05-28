(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject=['$scope'];
    
    function LunchCheckController($scope){
        $scope.listOfFood="";
        $scope.messageAfterChecking="";
        $scope.LunchCheck=function(){
            var msg=defineTypeOfMsg($scope.listOfFood);
            $scope.messageAfterChecking=msg;
        };
        
        function defineTypeOfMsg(str){
            if(!str)
                return "Please enter data first";
            var arr = str.split(',');
            if(arr.length<4){
                //console.log(arr.length);
                return "Enjoy!";
            }
            else{
                return "Too much!";
            }
        }
    }
})();