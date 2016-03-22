/**
 * Created by Sergei on 18.03.2016.
 */
app.controller('creditCardsRetreiveViewController', function ($scope, $http, $location,
                                                              $rootScope, cardsFeed) {
  // Restore data from session

  // Array of posts
  $scope.cards = [];

  // Getting all the cards from the mongodDB,
  // using a root: /cards/getCards
  // and saving it inside cards array.
  cardsFeed.getAll().success(function (data) {
    $scope.cards = data;
  });

});

/*
 * Factory that sends a get request to node side,
 * in order to receive all cards from mongdoDB.
 */
app.factory('cardsFeed', function ($http) {
  // Url for a get request to be sent
  var baseUrl = '/cards/getCards';

  // Factory methods, fields as an object
  var factory = {};

  // Getting all the cards, according to api
  factory.getAll = function ()
  {
    // returning object, resulted from node
    return $http.get(baseUrl);
  };

  // returning factory object
  return factory;
});
