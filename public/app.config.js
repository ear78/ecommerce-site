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
        .otherwise('/jackets');

    }
]);
