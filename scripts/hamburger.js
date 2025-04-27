
// on page load

$(document).ready(function() {
    if (window.matchMedia("(max-width:900px)").matches) {
        $(".menufull").addClass("hidden");
        $(".menubar").removeClass("hidden");
    } else {
        $(".menufull").removeClass("hidden");
        $(".menubar").addClass("hidden");
    }

  });

// media q
$(window).on("resize", function() {
    if (window.matchMedia("(max-width:900px)").matches) {
        $(".menufull").addClass("hidden");
        $(".menubar").removeClass("hidden");
    } else {
        $(".menufull").removeClass("hidden");
        $(".menubar").addClass("hidden");
    }
});



// click for menu

$("#hamMenu").on("click", function() {
    console.log("click worked")

    if ($(".menufull").hasClass("hidden")) {
        $(".menufull").removeClass("hidden");
        // console.log("unhidden. GOD WORK")
      } else {
        $(".menufull").addClass("hidden");
       // console.log("hidden")
      }

  });


