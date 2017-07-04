/**
 * Created by Administrator on 2017/6/29.
 */

$(function () {

    <!-- 登录验证 -->
    //<![CDATA[
    $(".login_four_button").click(function () {
        console.debug("验证")
        var _data = {};
        _data.user_tel = $('.user_tel').val();
        _data.user_pwd = $('.user_pwd').val();
        console.debug("---"+_data.user_tel+_data.user_pwd)
        $.ajax({
            type: 'post',
            url: '/vendor/do_login',
            data: JSON.stringify(_data),
            contentType: "application/json",
            success: function (data) {
                console.debug(data);
                if(data == "home"){
                    location.href = "/vendor?user_tel="+_data.user_tel;
                }else {
                    alert("账号或密码输入错误！");
                }
            },
            error: function (data, status, er) {
                console.debug("error: "+data+" status: "+status+" er:"+er);
            }
        });
    });
    //]]>
})
