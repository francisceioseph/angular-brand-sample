'use strict';

angular.module('brand-sample', ['ui.router'])
  .config(brandSampleConfig);

brandSampleConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function brandSampleConfig($stateProvider, $urlRouterProvider, $locationProvider) {
 $urlRouterProvider.otherwise('/home');

 $stateProvider.state('home', {
   url: '/home',
   templateUrl: 'views/home/home.html'
 });
}
