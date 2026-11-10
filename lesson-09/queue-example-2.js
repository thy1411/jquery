$(document).ready(function() {

    $("button").click(function() {

        var div = $("#box");

        div.animate({
            left: '100px'
        }, "slow");

        div.animate({
            fontSize: '3em'
        }, "slow");

    });

});