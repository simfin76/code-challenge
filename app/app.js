var app = angular.module('CodeChallenge', ['angularUtils.directives.dirPagination','angucomplete']);

app.controller('listdata',function($scope, $http){
	$scope.datalist = []; //declare an empty array
	$http.get("mockJson/mock.json").success(function(response){ 
		$scope.datalist = response;  //ajax request to fetch data into $scope.data
	});
    
    $scope.datalist.length;
    
    $scope.remove = function(item) { 
    var index = $scope.datalist.indexOf(item)
    $scope.datalist.splice(index, 1);     
  }
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
});