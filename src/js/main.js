'use strict';

define(['angular', 'angular-route', 'angular-touch', 'app/routeResolver'], function(angular) {
    var main = angular.module('rubyDigits', [
            'ngRoute',
            'ngTouch',
            'routeResolverServices'
        ]);

    main.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', 
        function($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
            main.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            var route = routeResolverProvider.route;
            $routeProvider
                .when('/home', route.resolve('home/home', 'home'))
                .otherwise({ redirectTo: '/home' });
        }
    ]);

    return main;
});