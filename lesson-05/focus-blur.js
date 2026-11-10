$(document).ready(function() {

    // focus()
    $("input").focus(function() {
        $(this).css("background-color", "#cccccc");
    });


    // blur()
    $("input").blur(function() {
        $(this).css("background-color", "#ffffff");
    });

});