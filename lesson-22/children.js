$(document).ready(function() {

    // Return all direct children of the container
    $("#showChildren").click(function() {
        $(".container").children().css({
            "color": "red",
            "border": "2px solid red"
        });
    });

    // Return only direct paragraph children
    $("#showParagraphs").click(function() {
        $(".container").children("p").css({
            "color": "blue",
            "border": "2px solid blue"
        });
    });

});