angular.module('toDoApp', []);


angular.module('toDoApp').controller('addToDo', function($scope){
  var itemList = [];

  $scope.addItem = function(){
    itemList.push($scope.itemToDo)
  }
  $scope.itemList = itemList;
})
