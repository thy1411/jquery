$(document).ready(function() {

    // 1. mouseenter()
    $("#p1").mouseenter(function() {
        alert("You entered p1!");
    });


    // 2. mouseleave()
    $("#p2").mouseleave(function() {
        alert("Bye! You now leave p1!");
    });


    // 3. mousedown()
    $("#p3").mousedown(function() {
        alert("Mouse down over p1!");
    });


    // 4. mouseup()
    $("#p4").mouseup(function() {
        alert("Mouse up over p1!");
    });


    // 5. hover()
    $("#p5").hover(
        function() {
            alert("You entered p1!");
        },
        function() {
            alert("Bye! You now leave p1!");
        }
    );

});