//滚动带平滑效果
function oncl()
{
  alert("功能尚未完成.I'm so fucking sorry")
}
$(document).ready(function () {
    $(".goto1").click(function() {
        $("html,body").animate({
        	scrollTop: $(".home").offset().top }, {duration: 800,easing: "swing"});
        return false;
    });
    $(".goto2").click(function() {
        $("html,body").animate({
        	scrollTop: $(".overview").offset().top }, {duration: 800,easing: "swing"});
        return false;
    });
    $(".goto3").click(function() {
        $("html,body").animate({
        	scrollTop: $(".configuration").offset().top }, {duration: 800,easing: "swing"});
        return false;
    });
    $(".goto4").click(function() {
        $("html,body").animate({
            scrollTop: $(".home").offset().top }, {duration: 800,easing: "swing"});
        return false;
    });
})

