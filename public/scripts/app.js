/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  function createTweetElement(obj){
    let $tweet = $('<article>').addClass('tweets');
    let $header = $('<header><h2>' + obj.user.name + '</h2>-<p>' + obj.user.handle + '</p><img src=' + obj.user.avatars.regular + ' alt="pic"/></header>');
    let $content = $('<p>' + obj.content.text + '</p>');
    let $footer = $('<footer><p>' + obj.created_at + '</p></footer>');

    $header.attr("src", obj.user.avatars.regular);
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
    //console.log(userTweet);
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

  $(".new-tweet").click(function() {
          $(this).toggleClass("off");
        });
        let p;
        $("button").click(function() {
          if (p) {
            p.prependTo(".container");
            p = null;
            $("textarea").focus();
          } else {
            p = $(".new-tweet").detach();
          }
  });

});


