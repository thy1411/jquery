$("#removeTestBtn").click(function() {
    $("p").remove(".test");
});

$("#removeMultipleBtn").click(function() {
    $("p").remove(".test, .demo");
});