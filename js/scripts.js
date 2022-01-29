

$(document).ready(function(){
  $("form#selector").submit(function() {
    event.preventDefault();
    const sock = $("#utensil").val();
    const utensil = $("#sock").val();
    const places = $("#places").val();

    if (sock === "goldToe" && utensil === "toothpick" && places === "nebraska") {
      $("#javaScript").show();
      $("#ruby").hide();
      $("#python").hide();
    } else if (places === "texas" && utensil === "chopsticks") {
      $("#javaScript").show();
      $("#ruby").hide();
      $("#python").hide();
    } else if (places === "florida" && sock === "goldToe" && utensil === "spoon") {
      $("#javaScript").hide();
      $("#ruby").hide();
      $("#python").show();
    } else { 
      $("#javaScript").show();
      $("#ruby").hide();
      $("#python").hide();
    }

  event.preventDefault();
  });
});
