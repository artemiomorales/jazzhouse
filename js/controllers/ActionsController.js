app.controller('ActionsController', ['$rootScope', '$scope', '$window', 'network', function($rootScope, $scope, $window, network) {
  $scope.inventory = "";
  $scope.hasItem = false;
  $rootScope.updateInventory = function(item) {
  	$scope.inventory = item;
  	if(!$scope.hasItem) {
  		$scope.hasItem = true;
  	}
  }
  $scope.goBack = function() {
  	$window.history.back();
  }
}]);