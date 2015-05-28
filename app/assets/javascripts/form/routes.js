/**
 * Configure routes of user module.
 */
define(['angular', './controllers', 'form'], function(angular, controllers) {
  'use strict';

  var mod = angular.module('form.routes', ['yourprefix.common']);
  mod.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/form',  {templateUrl: '/assets/javascripts/form/form.html', controller:controllers.FormCtrl})
    .when('/home',  {templateUrl: '/assets/javascripts/home/home.html', controller:controllers.HomeCtrl});
  }]);
  return mod;
});
