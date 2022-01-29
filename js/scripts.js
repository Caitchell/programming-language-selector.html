

$(document).ready(function(){
  $("form#langSelector").submit(function() {
  
    const sock = $("#sock").val();
    const utensil = $("#utensil").val();
    const places = $("#places").val();
    const biggieLine = $("#biggieLine").val();
    const cocktails =$("#cocktails").val();

    if (sock === "goldToe" && utensil === "toothpick" && places === "nebraska") {
      $("#javaScript").show();
      $("#ruby").hide();
      $("#python").hide();
    } else if (places === "texas" && utensil === "chopsticks" && biggieLine === "juicy3") {
      $("#javaScript").hide();
      $("#ruby").show();
      $("#python").hide();
    } else if (places === "florida" && biggieLine === "juicy1" && cocktails === "champagne") {
      $("#javaScript").hide();
      $("#ruby").hide();
      $("#python").show();
    } else if (places === "texas" && biggieLine === "juicy3" && cocktails === "moscowMule") {
      $("#javaScript").hide();
      $("#ruby").show();
      $("#python").hide();
    } else if (places === "nebraska" && biggieLine === "juicy2" && cocktails === "manhattan") {
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
