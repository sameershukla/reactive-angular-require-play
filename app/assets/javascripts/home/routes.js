/**
 * Home routes.
 */
define(['angular', './controllers', 'common'], function(angular, controllers) {
  'use strict';

  var mod = angular.module('home.routes', ['yourprefix.common']);
  mod.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',  {templateUrl: '/assets/javascripts/home/home.html', controller:controllers.HomeCtrl});
      //.when('/form', {templateUrl:'/assets/javascripts/form/form.html', controller:controllers.FormCtrl});
      //.otherwise( {templateUrl: '/assets/javascripts/home/notFound.html'});
  }]);
  return mod;
});
