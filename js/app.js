(function() {

window.app = angular.module('InteractiveBook', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'HomeController',
    	templateUrl: 'views/home.html'
  })
  	.when('/slides/:id', {
  		controller: 'SlideController',
    	templateUrl: 'views/slide.html'
  })
  	.otherwise({
    	redirectTo: '/'
  });
});

})();