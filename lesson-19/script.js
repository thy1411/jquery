$("#showDimensionsBtn").click(function() {
    var width = $("#box").width();
    var height = $("#box").height();

    var txt = "";

    txt += "Width: " + width + "px<br>";
    txt += "Height: " + height + "px";

    $("#result").html(txt);
});