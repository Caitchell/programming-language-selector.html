

$(document).ready(function(){
  $("form#langSelector").submit(function(event) {
    event.preventDefault();

    const sock = $("#sock").val();
    const utensil = $("#utensil").val();
    const places = $("#places").val();
    const biggieLine = $("#biggieLine").val();
    const cocktails =$("#cocktails").val();
    $("#javaScript").hide();
    $("#ruby").hide();
    $("#python").hide();
    if (sock === "underArmour" && cocktails === "manhattan" ) {
      $("#python").slideToggle();
    } else if (places === "texas" && utensil === "chopsticks" && biggieLine === "line3") {
      $("#ruby").fadeToggle();
    } else if (places === "florida" && biggieLine === "line1" && cocktails === "champagne" && sock === "nike" && utensil === "spoon") {
      $("#javaScript").slideToggle();
    } else if (places === "texas" && biggieLine === "line3" && cocktails === "moscowMule") {
      $("#ruby").fadeToggle();
    } else if (biggieLine === "line2" && sock === "underArmour" && places === "nebraska" && utensil === "toothpick" ) {
      $("#python").slideToggle();
    } else { 
      $("#javaScript").slideToggle();
    };
  });
});
