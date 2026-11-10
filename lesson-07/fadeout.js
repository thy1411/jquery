$(document).ready(function() {

    $("#fadeButton").click(function() {

        // Hiệu ứng biến mất với tốc độ mặc định
        $("#div1").fadeOut();

        // Hiệu ứng biến mất chậm
        $("#div2").fadeOut("slow");

        // Hiệu ứng biến mất trong 3 giây
        $("#div3").fadeOut(3000);

    });

});