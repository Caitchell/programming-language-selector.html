

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
      $("#python").slideToggle();
    } else if (places === "texas" && utensil === "chopsticks" && biggieLine === "line3") {
      $("#javaScript").hide();
      $("#ruby").fadeToggle();
      $("#python").hide();
    } else if (places === "florida" && biggieLine === "line1" && cocktails === "champagne" && sock === "nike" && utensil === "spoon") {
      $("#javaScript").slideToggle();
      $("#ruby").hide();
      $("#python").hide();
    } else if (places === "texas" && biggieLine === "line3" && cocktails === "moscowMule") {
      $("#javaScript").hide();
      $("#ruby").fadeToggle();
      $("#python").hide();
    } else if (biggieLine === "line2" && sock === "underArmour" && places === "nebraska" && utensil === "toothpick" ) {
      $("#javaScript").hide();
      $("#ruby").hide();
      $("#python").slideToggle();
    } else { 
      $("#javaScript").slideToggle();
      $("#ruby").fadeToggle();
      $("#python").hide();
    };
  });
});
