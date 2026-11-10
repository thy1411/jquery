$(document).ready(function() {

    $("#fadeButton").click(function() {

        // Hiệu ứng mặc định
        $("#div1").fadeToggle();

        // Hiệu ứng chậm
        $("#div2").fadeToggle("slow");

        // Hiệu ứng trong 3 giây
        $("#div3").fadeToggle(3000);

    });

});