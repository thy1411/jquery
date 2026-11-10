$(document).ready(function() {

    // Hide using slow
    $("#hideSlow").click(function() {
        $("#slow").hide("slow");
    });


    // Hide using fast
    $("#hideFast").click(function() {
        $("#fast").hide("fast");
    });


    // Hide using milliseconds
    $("#hideMilliseconds").click(function() {
        $("#milliseconds").hide(1000);
    });


    // Show using slow
    $("#showSlow").click(function() {
        $("#slow").show("slow");
    });


    // Show using fast
    $("#showFast").click(function() {
        $("#fast").show("fast");
    });


    // Show using milliseconds
    $("#showMilliseconds").click(function() {
        $("#milliseconds").show(1000);
    });

});