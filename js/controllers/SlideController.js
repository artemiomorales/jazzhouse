app.controller('SlideController', ['$rootScope', '$scope', 'slides', '$routeParams', 'network', function($rootScope, $scope, slides, $routeParams, network) {
  slides.success(function(data) {
    $scope.slide = data[$routeParams.id];
  });
  $scope.storeItem = function(itemNumber){
  	$rootScope.updateInventory($scope.slide.choices[itemNumber]);;
  };
}]);