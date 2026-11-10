$(document).ready(function() {

    // Set a single attribute
    $("#btn1").click(function() {

        $("#w3s").attr("href", "https://www.w3schools.com/jquery/");

    });

    // Set multiple attributes
    $("#btn2").click(function() {

        $("#w3s").attr({
            "href": "https://www.w3schools.com/jquery/",
            "title": "W3Schools jQuery Tutorial",
            "target": "_blank"
        });

    });

});