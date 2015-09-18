app.factory('slides', ['$http', function($http) {
  return $http.get('http://localhost/test/novel/data/slides.json')
     .success(function(data) {
       return data;
     })
     .error(function(data) {
       return data;
     });
}]);