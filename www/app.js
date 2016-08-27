'use strict';

angular.module('brand-sample', ['ui.router', 'ngMaterial'])
  .config(brandSampleConfig);

brandSampleConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider'];
function brandSampleConfig($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
 $urlRouterProvider.otherwise('/home');

 $stateProvider.state('home', {
   url: '/home',
   templateUrl: 'views/home/home.html'
 });

 $mdThemingProvider.theme('default')
  .primaryPalette('teal')
  .accentPalette('orange');
}
