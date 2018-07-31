"use strict";

$(document).ready(() => {
    let table;

    // reservation form pops up when table is clicked on
    $(".available").on("click", (e) => {
        table = $(e.target)
        $("form").show();

    });
    // reservation form "hides" when sent and table now reads "reserved"
    $("button").click(function() {
        $("form").hide();
        table.removeClass("available").addClass("reserved")

    });
    //X button on form
    $(".material-icons").click(function() {
        $("form").hide();
    });
    //available table changes color when hovered over
    $("body").on("mouseenter mouseleave", ".container .available", (e) => {
        $(e.target).toggleClass("hover");
    });

});