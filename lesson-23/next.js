$(document).ready(function() {

    // Return the next sibling element
    $("#showNext").click(function() {
        $("#selected").next().css({
            "color": "red",
            "border": "2px solid red",
            "background-color": "lightyellow"
        });
    });

});