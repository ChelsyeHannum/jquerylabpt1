"use strict";

$(document).ready(() => {
    let table;

    $(".available").on("click", (e) => {
        table = $(e.target)
        $("form").show();

    });

    $("button").click(function() {
        $("form").hide();
        table.removeClass("available").addClass("reserved")

    });

    $(".material-icons").click(function() {
        $("form").hide();
    });

    $("body").on("mouseenter mouseleave", ".container .available", (e) => {
        $(e.target).toggleClass("hover");
    });

});