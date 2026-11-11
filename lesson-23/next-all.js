$(document).ready(function() {

    // Return all next siblings
    $("#showNextAll").click(function() {
        $("#selected").nextAll().css({
            "color": "red",
            "border": "2px solid red"
        });
    });

    // Return only next paragraph siblings
    $("#showNextParagraphs").click(function() {
        $("#selected").nextAll("p").css({
            "color": "blue",
            "border": "2px solid blue"
        });
    });

});