
$(document).ready(function() {

    // =====================================
    // FUNCTION: RESET SELECTION
    // =====================================

    function resetSelection() {

        $("*").removeClass("selected");

    }


    // =====================================
    // FUNCTION: DISPLAY SELECTED ELEMENTS
    // =====================================

    function highlightSelection(elements, selectorName) {

        resetSelection();

        elements.addClass("selected");

        $("#result").text(
            "Selector: " + selectorName +
            " | Số phần tử được chọn: " + elements.length
        );

    }


    // =====================================
    // 1. UNIVERSAL SELECTOR
    // =====================================

    $("[data-selector='*']").click(function() {

        highlightSelection(
            $("*"),
            '$("*")'
        );

    });


    // =====================================
    // 2. CURRENT ELEMENT SELECTOR
    // =====================================

    $("[data-selector='this']").click(function() {

        highlightSelection(
            $(this),
            "$(this)"
        );

    });


    // =====================================
    // 3. ELEMENT WITH CLASS SELECTOR
    // =====================================

    $("[data-selector='p.intro']").click(function() {

        highlightSelection(
            $("p.intro"),
            '$("p.intro")'
        );

    });


    // =====================================
    // 4. FIRST ELEMENT SELECTOR
    // =====================================

    $("[data-selector='p:first']").click(function() {

        highlightSelection(
            $("p:first"),
            '$("p:first")'
        );

    });


    // =====================================
    // 5. FIRST LI OF FIRST UL
    // =====================================

    $("[data-selector='ul li:first']").click(function() {

        highlightSelection(
            $("ul li:first"),
            '$("ul li:first")'
        );

    });


    // =====================================
    // 6. FIRST CHILD SELECTOR
    // =====================================

    $("[data-selector='ul li:first-child']").click(function() {

        highlightSelection(
            $("ul li:first-child"),
            '$("ul li:first-child")'
        );

    });


    // =====================================
    // 7. ATTRIBUTE SELECTOR
    // =====================================

    $("[data-selector='[href]']").click(function() {

        highlightSelection(
            $("[href]"),
            '$("[href]")'
        );

    });


    // =====================================
    // 8. TARGET EQUAL BLANK
    // =====================================

    $("[data-selector=\"a[target='_blank']\"]").click(function() {

        highlightSelection(
            $("a[target='_blank']"),
            '$("a[target=\'_blank\']")'
        );

    });


    // =====================================
    // 9. TARGET NOT EQUAL BLANK
    // =====================================

    $("[data-selector=\"a[target!='_blank']\"]").click(function() {

        highlightSelection(
            $("a[target!='_blank']"),
            '$("a[target!=\'_blank\']")'
        );

    });


    // =====================================
    // 10. BUTTON SELECTOR
    // =====================================

    $("[data-selector=':button']").click(function() {

        highlightSelection(
            $(":button"),
            '$(":button")'
        );

    });


    // =====================================
    // 11. EVEN TABLE ROW SELECTOR
    // =====================================

    $("[data-selector='tr:even']").click(function() {

        highlightSelection(
            $("tr:even"),
            '$("tr:even")'
        );

    });


    // =====================================
    // 12. ODD TABLE ROW SELECTOR
    // =====================================

    $("[data-selector='tr:odd']").click(function() {

        highlightSelection(
            $("tr:odd"),
            '$("tr:odd")'
        );

    });


    // =====================================
    // RESET BUTTON
    // =====================================

    $("#resetButton").click(function() {

        resetSelection();

        $("#result").text(
            "Đã xóa tất cả vùng chọn."
        );

    });

});
