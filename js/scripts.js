

$(document).ready(function(){
  $("form#langSelector").submit(function() {
    event.preventDefault();

    const sock = $("#sock").val();
    const utensil = $("#utensil").val();
    const places = $("#places").val();
    const biggieLine = $("#biggieLine").val();
    const cocktails =$("#cocktails").val();

    if (sock === "underArmour" && cocktails === "manhattan" ) {
      $("#javaScript").hide();
      $("#ruby").hide();
      $("#python").show();
    } else if (places === "florida" && utensil === "chopsticks" && biggieLine === "line3") {
      $("#javaScript").hide();
      $("#ruby").show();
      $("#python").hide();
    } else if (places === "florida" && biggieLine === "line1" && cocktails === "champagne" && sock === "nike" && utensil === "spoon") {
      $("#javaScript").show();
      $("#ruby").hide();
      $("#python").hide();
    } else if (places === "texas" && biggieLine === "line3" && cocktails === "moscowMule" && utensil === "chopsticks") {
      $("#javaScript").hide();
      $("#ruby").show();
      $("#python").hide();
    } else if (biggieLine === "line2" && sock === "underArmour" && places === "nebraska" && utensil === "toothpick" ) {
      $("#javaScript").hide();
      $("#ruby").hide();
      $("#python").show();
    } else { 
      $("#javaScript").hide();
      $("#ruby").hide();
      $("#python").show();
    };
  });
});
