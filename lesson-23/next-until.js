$(document).ready(function() {

    // Return all next siblings until span
    $("#showUntilSpan").click(function() {
        $("#selected").nextUntil("span").css({
            "color": "red",
            "border": "2px solid red"
        });
    });

    // Return only paragraph siblings until span
    $("#showUntilSpanFilter").click(function() {
        $("#selected").nextUntil("span", "p").css({
            "color": "blue",
            "border": "2px solid blue"
        });
    });

});