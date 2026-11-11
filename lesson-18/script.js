// Get CSS Property Value
$("#getColorBtn").click(function() {
    var color = $("#box").css("background-color");

    $("#result").text("Background Color: " + color);
});

// Set CSS Property Value
$("#setColorBtn").click(function() {
    $("#box").css("background-color", "yellow");
});