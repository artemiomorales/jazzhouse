app.factory('slides', ['$http', function($http) {
  return $http.get('/projects/jazzhouse/data/slides.json')
     .success(function(data) {
       return data;
     })
     .error(function(data) {
       return data;
     });
}]);