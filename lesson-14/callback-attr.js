$(document).ready(function() {

    $("#changeButton").click(function() {

        $("#w3s").attr("href", function(i, origValue) {

            $("#result").text(
                "Index: " + i + " | Old href: " + origValue
            );

            return origValue + "/jquery/";

        });

    });

});