/**
 * Created by Sergei on 17.03.2016.
 */
app.controller('creditCardSubmitViewController', function ($timeout, $scope, $http, $location, $rootScope) {
  // Restore data from session
  /**************************************
   *
   * Scope variables and data objects
   *
   * ************************************/

  // Creating book object
  $scope.card = {
    name:'',
    number:'',
    email:'',
    phoneNumber:'',
    businessName:'',
  };

  // error message holder for submiting data
  $scope.errorMessage = '';

  // boolean values for checkboxes
  $scope.registeredAccepted  = false;
  $scope.registeredAcceptedF = false;
  $scope.licenceAccepted     = false;

  /**************************************
   *
   * Scope functions
   *
   * ************************************/

  // Submiting post to the back-end for further validation
  // and savin it to mongoDB
  $scope.post = function () {
    // Sending post request to the server side, to store it in the DB
    $http.post('/cards/newCard', { name: $scope.data.name,
                               cardNumber: $scope.data.card1 + $scope.data.card2 +
                                           $scope.data.card3 + $scope.data.card4,
                               email:$scope.data.email,
                               phone:$scope.data.phone,
                               reason:$scope.data.reason,
                               businessName:$scope.data.businessName,
        }).success(function (data) {
          if (data.state == 'success') {
            $location.path('/');
          } else {
            $scope.errorMessage = data.message;
          }
        });
  };
});
