$(document).ready(function() {

    $("#start").click(function() {
        $("#panel").slideDown(5000);
    });

    $("#stop").click(function() {
        $("#panel").stop();
    });

});