/**
 * Created by Sergei on 18.03.2016.
 */
app.controller('creditCardsRetreiveViewController', function ($scope, $http, $location, $rootScope) {
  // Restore data from session

  // Array of posts
  $scope.cards = [];

  // Getting all the posts from the mongodDB,
  // using a root: /books/buy
  // and saving it inside posts array.
  //booksFeed.getAll().success(function (data)
  //{
  //    console.log('data: ' + data);
  //    $scope.posts = data;
  //});

});

/*
 * Service, send a get request to node side,
 * in order to receive all books from mongdoDB.
 */
app.factory('booksFeed', function ($http)
{
  // Url for a get request to be sent
  var baseUrl = '/cards/retreive';

  // Factory methods, fields as an object
  var factory = {};

  // Getting all the books, according to api
  factory.getAll = function ()
  {
    // returning object, resulted from node
    return $http.get(baseUrl);
  };

  // returning factory altogether
  return factory;
});
