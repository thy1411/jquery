$(document).ready(function() {

    // Return all ancestors between span and div
    $("#untilDiv").click(function() {
        $("span").parentsUntil("div").css({
            "color": "red",
            "border": "2px solid red"
        });
    });

    // Filter ancestors between span and div
    $("#filterUl").click(function() {
        $("span").parentsUntil("div", "ul").css({
            "color": "blue",
            "border": "2px solid blue"
        });
    });

    // Return all ancestors between span and body
    $("#untilBody").click(function() {
        $("span").parentsUntil("body").css({
            "color": "green",
            "border": "2px solid green"
        });
    });

});