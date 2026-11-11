$(document).ready(function() {

    // Get document and window dimensions
    $("#checkSize").click(function() {
        var txt = "";

        txt += "Document width/height: " + $(document).width();
        txt += " x " + $(document).height() + "\n";

        txt += "Window width/height: " + $(window).width();
        txt += " x " + $(window).height();

        alert(txt);
    });

    // Set width and height
    $("#setSize").click(function() {
        $("#div1").width(500).height(500);
    });

});