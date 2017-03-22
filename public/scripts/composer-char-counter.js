$(document).ready(function() {
  console.log("document loaded");
  $(".new-tweet textarea").on("keypress", function() {
    let tweet = $(this).val();
    let tweetLength = tweet.length;
    let charsRem = 139 - tweetLength;
    let counter = $(".counter").html(charsRem);
    // console.log(charsRem);
    if (charsRem >= 0) {
      $(".counter").css("color", "black");
    } else {
      $(".counter").css("color", "red");
    }
  });
});

$(window).on("load", function() {
  console.log("window loaded");
});



