// $(document).ready(function() {
//   $(".tweets article").on("mouseover", function() {
//  $(".tweets img").hide();
//  });
// });

$(document).ready(function() {
  $(".tweets footer img").hide();
  $(".tweets article").on("mouseover", function() {
  $(".tweets footer img").show();
  });
  $(".tweets article").on("mouseout", function() {
  $(".tweets footer img").hide();
  });
});

