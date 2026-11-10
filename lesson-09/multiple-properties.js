$(document).ready(function() {

    $("#animateButton").click(function() {

        // Thay đổi nhiều thuộc tính CSS cùng lúc
        $("#box").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });

    });

});