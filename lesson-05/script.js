$(document).ready(function() {

    // Click Event
    $("p").click(function() {
        $(this).hide();
    });

    // Double Click Event
    $(".double-click").dblclick(function() {
        $(this).hide();
    });

});