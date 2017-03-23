angular.module('eApp')

    .config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
        .when('/jackets', {
            template: '<jackets></jackets>'
        })
        .when('/jackets/:jacketId', {
            template: '<jacket-detail></jacket-detail>'
        })
        .when('/cart', {
            template: '<cart></cart>'
        })
        .otherwise('/jackets');

    }
]);
