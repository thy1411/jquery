$(document).ready(function() {

    // Return all siblings of the selected paragraph
    $("#showSiblings").click(function() {
        $("p.selected").siblings().css({
            "color": "red",
            "border": "2px solid red"
        });
    });

    // Return only paragraph siblings
    $("#showParagraphs").click(function() {
        $("p.selected").siblings("p").css({
            "color": "blue",
            "border": "2px solid blue"
        });
    });

});