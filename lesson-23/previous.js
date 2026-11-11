$(document).ready(function() {

    // Return the previous sibling element
    $("#showPrev").click(function() {
        $("#selected").prev().css({
            "color": "red",
            "border": "2px solid red"
        });
    });

    // Return all previous sibling elements
    $("#showPrevAll").click(function() {
        $("#selected").prevAll().css({
            "color": "blue",
            "border": "2px solid blue"
        });
    });

    // Return previous siblings until the stop element
    $("#showPrevUntil").click(function() {
        $("#selected").prevUntil(".stop").css({
            "color": "green",
            "border": "2px solid green"
        });
    });

    // Return only paragraph siblings until the stop element
    $("#showPrevFilter").click(function() {
        $("#selected").prevUntil(".stop", "p").css({
            "color": "purple",
            "border": "2px solid purple"
        });
    });

});