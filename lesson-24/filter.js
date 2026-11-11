
$(document).ready(function() {

    // Filter paragraphs with class "intro"
    $("#filterButton").click(function() {
        $("p").removeClass("highlight");

        $("p").filter(".intro").addClass("highlight");
    });

    // Reset the highlighting
    $("#resetButton").click(function() {
        $("p").removeClass("highlight");
    });

});
