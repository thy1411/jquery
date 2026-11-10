
$(document).ready(function() {

    console.log("DOM đã sẵn sàng!");

    console.log("jQuery version:", $.fn.jquery);


    // =====================================
    // EXAMPLE 1: $(this).hide()
    // =====================================

    // $(this).hide();

    // Lưu ý:
    // this phải đại diện cho một phần tử HTML
    // trong ngữ cảnh thực thi phù hợp.
    // Chưa thực thi độc lập ở ví dụ này.


    // =====================================
    // EXAMPLE 2: $("p").hide()
    // =====================================

    // $("p").hide();


    // =====================================
    // EXAMPLE 3: $(".test").hide()
    // =====================================

     $(".test").hide();


    // =====================================
    // EXAMPLE 4: $("#test").hide()
    // =====================================

    // $("#test").hide();


});
