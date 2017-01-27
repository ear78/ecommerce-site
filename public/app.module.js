'use strict'

var eApp = angular.module('eApp',['ngRoute'])

    eApp.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/jackets', {
                template: '<jackets></jackets>'
            }).
            when('jackets/:jacketId', {
                template: '<jacket-list></jacket-list>'
            }).
            otherwise('/jackets')
    }
]);
