/**
 * Created by Administrator on 2017/6/28.
 */
$(function () {
    /**
     * 轮播图滚动
     */
    $.fn.time_Scroll = function() {

        var index = 0;//声明序列号默认从0开始的
        var play = null;
        $(".bottom_button li").mouseover(function () {
            clearInterval(play);
            index = $(this).index();
            $(this).addClass("now").siblings().removeClass("now");
            <!--this表示当前对象sibling表示同等级的对象-->
            $(".jd_banner .clearfix li").eq(index).show().siblings("li").hide();
        }).mouseout(function () {
            autoplay();
        });
        function autoplay() {
            play = setInterval(function () {
                index++;
                if (index > 3) {
                    index = -1;
                } else {
                    $(".bottom_button li").eq(index).addClass("now").siblings().removeClass("now");
                    $(".jd_banner .clearfix li").eq(index).show().siblings("li").hide();
                }
            }, 2000);
        }
        autoplay();
    }
})

