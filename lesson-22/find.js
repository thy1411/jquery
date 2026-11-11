$(document).ready(function() {

    // Find all descendants
    $("#findAll").click(function() {
        $(".container").find("*").css({
            "color": "red",
            "border": "2px solid red"
        });
    });

    // Find all paragraph descendants
    $("#findParagraphs").click(function() {
        $(".container").find("p").css({
            "color": "blue",
            "border": "2px solid blue"
        });
    });

    // Find all elements using the universal selector
    $("#findAllElements").click(function() {
        $(".container").find("*").css({
            "background-color": "lightyellow"
        });
    });

});