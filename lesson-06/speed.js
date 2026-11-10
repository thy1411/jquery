$(document).ready(function() {

    // 1. Ẩn chậm trong 600 mili giây
    $("#anCham").click(function() {
        $("#doanVanCham").hide("slow");
    });


    // 2. Ẩn nhanh trong 200 mili giây
    $("#anNhanh").click(function() {
        $("#doanVanNhanh").hide("fast");
    });


    // 3. Ẩn trong 1000 mili giây
    $("#anMotGiay").click(function() {
        $("#doanVanMotGiay").hide(1000);
    });


    // 4. Hiện chậm trong 600 mili giây
    $("#hienCham").click(function() {
        $("#doanVanCham").show("slow");
    });


    // 5. Hiện nhanh trong 200 mili giây
    $("#hienNhanh").click(function() {
        $("#doanVanNhanh").show("fast");
    });


    // 6. Hiện trong 1000 mili giây
    $("#hienMotGiay").click(function() {
        $("#doanVanMotGiay").show(1000);
    });

});