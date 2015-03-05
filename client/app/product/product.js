'use strict';

angular.module('angularCartApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/product', {
        templateUrl: 'app/product/product.html',
        controller: 'ProductCtrl'
      });
  });
