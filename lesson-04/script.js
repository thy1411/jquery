
$(document).ready(function() {

    // =====================================
    // 1. ELEMENT SELECTOR
    // =====================================

    $("#btnElement").click(function() {

        $("p").hide();

    });


    // =====================================
    // 2. ID SELECTOR
    // =====================================

    $("#btnId").click(function() {

        $("#test").hide();

    });


    // =====================================
    // 3. CLASS SELECTOR
    // =====================================

    $("#btnClass").click(function() {

        $(".test").hide();

    });

});
