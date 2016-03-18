/**
 * Created by Sergei on 17.03.2016.
 */
app.controller('creditCardSubmitViewController', function ($timeout, $scope, $http, $location, $rootScope) {
  // Restore data from session
  /**************************************
   *
   * Scope variables and data arrays
   *
   * ************************************/

  // Creating book object
  $scope.card = {
    number:'',
  };

  // error message holder for submiting data
  $scope.errorMessage = '';

  /**************************************
   *
   * Scope functions
   *
   * ************************************/

  // Submiting post to the back-end for further validation
  // and savin it to mongoDB
  $scope.post = function ()
  {
    // Sending post request to the server side, to store it in the DB
    $http.post('/cards/add', { isbn: $scope.card.number,
        }).success(function (data) {
          if (data.state == 'success') {
            $scope.errorMessage = 'Form has been submitted succesfuly';
          } else {
            $scope.errorMessage = data.message;
          }
        });
  };
});