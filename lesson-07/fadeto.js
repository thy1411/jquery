$(document).ready(function() {

    $("#fadeButton").click(function() {

        // Đưa độ mờ về 0.15
        $("#div1").fadeTo("slow", 0.15);

        // Đưa độ mờ về 0.4
        $("#div2").fadeTo("slow", 0.4);

        // Đưa độ mờ về 0.7
        $("#div3").fadeTo("slow", 0.7);

    });

});