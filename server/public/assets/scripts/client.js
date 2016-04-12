var app = angular.module('assignmentApp' []);

app.controller("meanController", ['$scope', '$http', function($scope, $http){
  $scope.assignment = {};
  $scope.assignments = [];

  




  var fetchAssignments = function(){
      return $http.get('/all').then(function(response){
        if(response.status !==200){
          console.log('Failed to fetch Assignments');
        }else {
          $scope.assignments = response.data;
          return response.data;
        }
      });
  };
}]);
