$(document).ready(function() {

    $("#fadeButton").click(function() {

        // Hiệu ứng mặc định
        $("#div1").fadeIn();

        // Hiệu ứng chậm
        $("#div2").fadeIn("slow");

        // Hiệu ứng trong 3 giây
        $("#div3").fadeIn(3000);

    });

});