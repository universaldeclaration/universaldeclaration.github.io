// mian.js all style change

$(document).ready(function() {

    // 添加切换模式按钮
    $(".navbar-brand").after("" +
        "<div class='text-right'>" +
        "<a class='btn btn-sm'>Light Mode</a>" +
        "<span>&nbsp;&nbsp;</span>" +
        "<a class='btn btn-sm'>Dark Mode</a>" +
        "</div>");

    // 切换页面显示模式
    $("a.btn").click(function() {
        if($(this).text() === "Light Mode") {
            $("body").removeClass("bg-dark");
            $("div, a").removeClass("link-light").removeClass("link-light").removeClass("bg-dark");
            $("a").addClass("link-dark").attr("displaymode", "").attr("displaymode", "light");
            $("a.navbar-brand").removeClass("text-light");
        }
        if($(this).text() === "Dark Mode") {
            $("body").addClass("bg-dark");
            $("div, div.small, a").removeClass("link-dark").addClass("link-light").addClass("bg-dark");
            $("a").attr("displaymode", "").attr("displaymode", "dark");
            $("a.navbar-brand").addClass("text-light");
        }
    });
});
