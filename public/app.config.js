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
        .when('/about', {
            template: '<about></about>'
        })
        .when('/login', {
            template: '<login></login>'
        })
        .otherwise('/jackets');

    }
]);
