// Get outer dimensions
$("#showDimensionsBtn").click(function() {
    var outerWidth = $("#div1").outerWidth();
    var outerHeight = $("#div1").outerHeight();

    var txt = "";

    txt += "Outer Width: " + outerWidth + "px<br>";
    txt += "Outer Height: " + outerHeight + "px";

    $("#result").html(txt);
});

// Get outer dimensions including margin
$("#showMarginBtn").click(function() {
    var outerWidth = $("#div1").outerWidth(true);
    var outerHeight = $("#div1").outerHeight(true);

    var txt = "";

    txt += "Outer Width with Margin: " + outerWidth + "px<br>";
    txt += "Outer Height with Margin: " + outerHeight + "px";

    $("#result").html(txt);
});