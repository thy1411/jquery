$(document).ready(function() {

    $("#animateButton").click(function() {

        // Di chuyển và tăng kích thước phần tử
        $("#box").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });

    });

});