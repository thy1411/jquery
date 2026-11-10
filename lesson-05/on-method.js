$(document).ready(function() {

    // 1. Attach a Click Event
    $("#clickExample").on("click", function() {
        $(this).hide();
    });


    // 2. Attach Multiple Events
    $(".multipleEvents").on({

        mouseenter: function() {
            $(this).css("background-color", "lightgray");
        },

        mouseleave: function() {
            $(this).css("background-color", "lightblue");
        },

        click: function() {
            $(this).css("background-color", "yellow");
        }

    });

});