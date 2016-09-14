(function () {
  'use strict';
  angular.module('LunchCheckApp',[])
  .controller('LunchCheckController',LunchCheckController)

    LunchCheckController.$inject=['$scope'];

    function LunchCheckController($scope)
    {
      $scope.items="";
      $scope.logic=function () {
        if($scope.items=="")
        {
          return $scope.message="Please enter data first",$scope.result="info";
        }
        var array=$scope.items.split(",");
         if(array.length<=3){
          $scope.message="Enjoy";
          $scope.result="success";
        }
        else{
          $scope.message="Too much";
          $scope.result="danger";
        }

        }

      }

    }

)();
