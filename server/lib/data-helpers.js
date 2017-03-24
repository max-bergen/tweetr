"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(tweet, callback) {
      let newTweet = db.collection("tweets").insertOne(tweet);
      callback(null);
 },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
    db.collection("tweets").find().toArray((err, tweets) => {
      if (err) {
        return callback(err);
      }
      callback(null, tweets);

    });
  }

}

}

        // console.log(db.collection("tweets").find());
        // const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        // callback(null, db.collection("tweets").find());