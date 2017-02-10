 var HWApp = angular.module('HelloWorldApp', []);
HWApp.controller('HelloWorldController',
            ['$scope', function ($greet) {
                $greet.who = 'World!';
            }]
        );