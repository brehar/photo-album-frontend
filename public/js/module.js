'use strict';

var app = angular.module('photoApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/html/home.html',
        controller: 'homeCtrl'
    }).state('images', {
        url: '/images',
        templateUrl: '/html/images.html',
        controller: 'imageCtrl'
    }).state('imagedetails', {
        url: '/images/:id',
        templateUrl: '/html/imagedetails.html',
        controller: 'imagedetailsCtrl'
    }).state('albums', {
        url: '/albums',
        templateUrl: '/html/albums.html',
        controller: 'albumCtrl'
    }).state('albumdetails', {
        url: '/albums/:id',
        templateUrl: '/html/albumdetails.html',
        controller: 'albumdetailsCtrl'
    });

    $urlRouterProvider.otherwise('/');
});