$("#showDimensionsBtn").click(function() {
    var innerWidth = $("#div1").innerWidth();
    var innerHeight = $("#div1").innerHeight();

    var txt = "";

    txt += "Inner Width: " + innerWidth + "px<br>";
    txt += "Inner Height: " + innerHeight + "px";

    $("#result").html(txt);
});