$(document).ready(function() {

    $("#animateButton").click(function() {

        // Chuyển đổi chiều cao giữa hiển thị và ẩn
        $("#box").animate({
            height: 'toggle'
        });

    });

});