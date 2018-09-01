(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.message = "";
  $scope.displayMessage = function () {
    if ($scope.data == "" || typeof $scope.data == 'undefined') {
        $scope.message = "Please enter data first";
        $scope.style = "message_red";
        $scope.border_style = "border_red";
    } else {
        var dishes = $scope.data.split(',');
        var trim_dishes ="";
        if (dishes.includes(" ")) {
          trim_dishes = dishes.filter((value)=>value!=" ");
        } else if (dishes.includes("")) {
          trim_dishes = dishes.filter((value)=>value!="");
        } else {
          trim_dishes = dishes.slice();
        };
        if (trim_dishes.length <= 3){
          $scope.message = "Enjoy!";
          $scope.style = "message_green";
          $scope.border_style = "border_green";
        } else {
            $scope.message = "Too much!";
            $scope.style = "message_green";
            $scope.border_style = "border_green";
        };
        console.log($scope.data);
        console.log(dishes);
        console.log(trim_dishes);

    };
  };
};

})();
