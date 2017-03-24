"use strict";

const simulateDelay = require("./util/simulate-delay");

module.exports = function makeDataHelpers(db) {
  return {
    saveTweet: function(tweet, callback) {
      let newTweet = db.collection("tweets").insertOne(tweet);
      callback(null);
    },
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
