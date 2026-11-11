$(document).ready(function() {

    $("#highlight").click(function() {

        $("span").parent().css({
            "color": "red",
            "border": "2px solid red"
        });

    });

});