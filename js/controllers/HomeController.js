app.controller('HomeController', ['$scope', 'slides', function($scope, slides) {
  slides.success(function(data) {
    $scope.slides = data;
  });
}]);