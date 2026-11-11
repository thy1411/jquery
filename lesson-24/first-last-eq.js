$(document).ready(function() {

    // Select the first DIV element
    $("#firstDiv").click(function() {
        $("div").first().css({
            "background-color": "lightgreen",
            "border": "2px solid green"
        });
    });

    // Select the last DIV element
    $("#lastDiv").click(function() {
        $("div").last().css({
            "background-color": "lightyellow",
            "border": "2px solid orange"
        });
    });

    // Select the second paragraph
    $("#secondParagraph").click(function() {
        $("p").eq(1).css({
            "background-color": "lightblue",
            "border": "2px solid blue"
        });
    });

    // Select the second paragraph from the end
    $("#negativeIndex").click(function() {
        $("p").eq(-2).css({
            "background-color": "pink",
            "border": "2px solid red"
        });
    });

});