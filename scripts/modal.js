
$(document).ready(function () {
    $(".modal").addClass("hidden");
});

$("#modalEmotionTent").on("click", function() {
    console.log("click worked")
    $(".modal").removeClass("hidden");
    $("body").addClass("transparent")
});

$("#modalEmotionTentEx").on("click", function() {
    console.log("click worked")
    $(".modal").addClass("hidden");
    $("body").removeClass("transparent")
});
