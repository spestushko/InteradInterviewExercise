/**
 * Created by Sergei on 18.03.2016.
 */
var route = angular.module('route', ['ngRoute']);

route.config(function ($routeProvider, $locationProvider)
{
  /*
  * Routing for the front-end part. .html pages are
  * being loaded into 'ng-view', that can be found
  * in 'index.ejs' file
  * */
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
