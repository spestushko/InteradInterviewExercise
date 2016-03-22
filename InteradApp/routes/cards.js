var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Card = mongoose.model('Card');

/* GET cards listing. */
router.get('/getCards', function (req, res) {
  // Getting all the cards objects from the database
  Card.find(function (err, cards) {
    if (err) {
      console.log('SEND_CARDS_ERR:{ ' + err + '}');

      // In case of an error, send 500 error state
      return res.send(500, err);
    } else {
      console.log('SEND_CARDS_GOOD:');

      // and send them if no error occured.
      return res.send(200, cards);
    }
  });
});

/* POST new card to the DB */
router.post('/newCard', function (req, res) {

  // Creating an object model to save in db
  var card = new Card();

  // Saving data to object
  card.cardNum      = req.body.cardNumber;
  card.clientName   = req.body.name;
  card.email        = req.body.email;
  card.phone        = req.body.phone;
  card.reason       = req.body.reason;
  card.businessName = req.body.businessName;

  // Saving card object to the Database
  card.save(function (err) {
    if (err) console.log('ERROR_SAVING_CARD:{' + err + '}');
  });

  // Sending back success state
  res.send({ state:'success' });
});

// Exporting router
module.exports = router;
