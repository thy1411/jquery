$("#removeOneBtn").click(function() {
    $("h3").removeClass("red");
});

$("#removeMultipleBtn").click(function() {
    $("h3").removeClass("red bold");
});

$("#removeAllBtn").click(function() {
    $("#box").removeClass();
    $("h3").removeClass();
    $("p").removeClass();
});