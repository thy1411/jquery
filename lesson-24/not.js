
$(document).ready(function() {

    // Select paragraphs without the intro class
    $("#notButton").click(function() {
        $("p").removeClass("highlight");

        $("p").not(".intro").addClass("highlight");
    });

    // Select paragraphs that are not even
    $("#evenButton").click(function() {
        $("p").removeClass("highlight");

        $("p").not(":even").addClass("highlight");
    });

    // Reset the highlighting
    $("#resetButton").click(function() {
        $("p").removeClass("highlight");
    });

});
