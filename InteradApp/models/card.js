/**
 * Created by Sergei on 21.03.2016.
 */

// Adding db
var mongoose = require('mongoose');

// Schema object
var Schema = mongoose.Schema;

/*
* Model, describing all the fields in the form with
* required validation on the mongoDB side.
* */
var CardModel = new Schema({
  cardNum:{
    type: String,
    minlength: 16,
    maxlength: 16,
    validate: /^\d+$/,
    default: '1111111111111111',
  },
  clientName:{
    type: String,
    minLength: 2,
    maxlength: 50,
    default:'No client name provided',
    validate:/^[A-Za-z.,\ '-]*$/,
  },
  email:{
    type: String,
    minLength: 5,
    maxLength: 50,
    default: 'default@gmail.com',
    validate: /^[a-zA-Z]+[A-Za-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$/,
  },
  businessName:{
    type: String,
    minLength: 2,
    maxlength: 50,
    default: 'No business name provided',
    validate:/^[A-Za-z.,\ '-]*$/,
  },
  phone:{
    type: String,
    minLength: 9,
    maxLength: 20,
    required: true,
    validate: /^[0-9-)(\ ]*$/,
  },
  reason:{
    type: String,
    default:'No reasoning provided',
  },
});

// Declaring created model
mongoose.model('Card', CardModel);
