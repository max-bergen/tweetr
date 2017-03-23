/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// var data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];

$(document).ready(function() {

  function createTweetElement(obj){
    let $tweet = $('<article>').addClass('tweets');
    let name = obj.user.name;
    let handle = obj.user.handle;
    let content = obj.content.text
    let avatar = obj.user.avatars.regular;
    let time = obj.created_at;

    let $header = $('<header><h2>' + name + '</h2><p>' + handle + '</p><img src=' + avatar + ' alt="pic"/></header>');
    let $content = $('<p>' + content + '</p>');
    let $footer = $('<footer><p>' + time + '</p></footer>');

    $header.attr("src", avatar);
    $header.appendTo($tweet);
    $content.appendTo($tweet);
    $footer.appendTo($tweet);

    return $tweet;

  };
//createTweetElement(tweetObj);
  function renderTweets(arr){

    for (let key in arr){
      let tweet = createTweetElement(arr[key]);
      tweet.appendTo('.tweets-container');
    }

  }

  $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function (tweetsArray) {
        renderTweets(tweetsArray);
      }
    });

  $(function () {
  let $form = $('.submit');
  $form.on('click', function (event) {
    event.preventDefault();
    let userTweet = $('textarea').val();
    console.log(userTweet);
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: {text: userTweet}
    }).done(function (tweet){
      let tweetEl = createTweetElement(tweet);
      tweetEl.prependTo('.tweets-container');
      $('textarea').val("");
    })

  });

  });

});


