/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

});


