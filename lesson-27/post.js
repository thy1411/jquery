
$(document).ready(function() {

    $("#postButton").click(function() {

        $.post("/demo_test_post",
        {
            name: "Donald Duck",
            city: "Duckburg"
        },
        function(data, status) {

            alert("Data: " + data + "\nStatus: " + status);

            $("#result").text(data);

        });

    });

});
