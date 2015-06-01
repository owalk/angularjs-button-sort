var App = angular.module('App', []);


App.factory('sortLast',function() {
return 'last';
//im still a little fuzzy on how to actually use factories
//but I think I need to get the value passed to the controller
//and then use the factory as a sort of constructor for the function
});

 
App.controller('appCtrl', function($scope, $http) {

    $http.get('list.json')
        .then(function(res){
            $scope.list = res.data;
        });

$scope.showBool = false;
$scope.button= {text:"load"};

$scope.sortFirst = function() {
    $scope.sortOrder = 'first';
}

$scope.reOrder = function() {
    $scope.sortOrder = 'reorder';
}

$scope.sortLast = function() {
    
    $scope.sortOrder = 'last';
}

$scope.reload = function() {
    $scope.showBool = !$scope.showBool;

    if ($scope.showBool)
        $scope.button= {text:"reload"};
    else
        $scope.button= {text:"load"};
}
});
