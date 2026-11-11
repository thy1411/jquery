
$(document).ready(function() {

    $("#getButton").click(function() {

        $.get("/demo_test", function(data, status) {

            alert("Data: " + data + "\nStatus: " + status);

            $("#result").text(data);

        });

    });

});
