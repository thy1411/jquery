$(document).ready(function() {

    $("button").click(function() {

        $("p").toggle(1000, function() {

            alert("The toggle() method is finished!");

        });

    });

});