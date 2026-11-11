$(document).ready(function() {

    // Return all ancestors of span
    $("#allParents").click(function() {
        $("span").parents().css({
            "color": "red",
            "border": "2px solid red"
        });
    });

    // Return only ul ancestors
    $("#filterParents").click(function() {
        $("span").parents("ul").css({
            "color": "blue",
            "border": "2px solid blue"
        });
    });

    // Return multiple ancestor types
    $("#multipleParents").click(function() {
        $("span").parents("li, div").css({
            "color": "green",
            "border": "2px solid green"
        });
    });

});