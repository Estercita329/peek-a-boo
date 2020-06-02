$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".clickableFriends").click(function() {
    $("#walrus-friends").show(1000);
    //$("#walrus-friends").toggle();
  });
});
