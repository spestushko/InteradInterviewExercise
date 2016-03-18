/**
 * Created by Sergei on 18.03.2016.
 */
var route = angular.module('route', ['ngRoute']);

route.config(function ($routeProvider, $locationProvider)
{
  $routeProvider
        .when('/creditCardSubmit', {
          templateUrl: 'components/mainForm/creditCardSubmitView.html',
          controller: 'creditCardSubmitViewController',
        })

        .when('/creditCardsRetreive', {
          templateUrl: 'components/viewCards/creditCardsRetreiveView.html',
          controller: 'creditCardsRetreiveViewController',
        })

        .otherwise({ redirectTo: '/' });
});
