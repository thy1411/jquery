$(document).ready(function() {

    $("#start").click(function() {

        var box = $("#box");

        box.animate({
            height: '300px',
            opacity: '0.4'
        }, 3000);

        box.animate({
            width: '300px',
            opacity: '0.8'
        }, 3000);

        box.animate({
            height: '100px',
            opacity: '0.4'
        }, 3000);

        box.animate({
            width: '100px',
            opacity: '0.8'
        }, 3000);

    });

    $("#stop").click(function() {
        $("#box").stop(false, true);
    });

});