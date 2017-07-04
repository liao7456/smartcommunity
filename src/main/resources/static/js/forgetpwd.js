/**
 * Created by Administrator on 2017/6/29.
 */
$(function () {

    /*验证手机号码*/
    $(".fp_three_input_user_tel").focus(function () {
        document.getElementById("user_tel_error").style.display = "none";
        if(this.value == "请输入手机号"){
            this.value = "";
        }
    })
    $(".fp_three_input_user_tel").blur(function () {
        if(this.value == ""){
            this.value = "请输入手机号";
        }
        var phone = user.user_tel.value;
        if(!(/^1[34578]\d{9}$/.test(phone))){
            console.debug("进入");
            document.getElementById("user_tel_error").style.display = "block";
            document.getElementById("user_tel_error").innerText = "请输入正确的手机号码";
        }
    })

    /*验证验证码*/
    $(".fp_three_body_message_code").focus(function () {
        document.getElementById("message_code_error").style.display = "none";
    })
    $(".fp_three_body_message_code").blur(function () {
        var message_code = document.getElementById("message_code");
        console.debug(message_code.innerText);
        if(message_code.innerText == ""){
            document.getElementById("message_code_error").style.display = "block";
            document.getElementById("message_code_error").innerText = "请获取验证码";
        }else {
            if(this.value != message_code.innerText){
                document.getElementById("message_code_error").style.display = "block";
                document.getElementById("message_code_error").innerText = "验证码错误";
            }
        }
    })

    /*验证新密码*/
    $(".fp_three_input_user_pwd").focus(function () {
        document.getElementById("user_pwd_error").style.display = "none";
    })
    $(".fp_three_input_user_pwd").blur(function () {
        var pwd = user.user_pwd.value;
        if(!(/^(\w){6,16}$/.test(pwd))){
            document.getElementById("user_pwd_error").style.display = "block";
            document.getElementById("user_pwd_error").innerText = "密码长度为6-16位";
        }
    })

    /*验证重复密码*/
    $(".fp_three_input_user_repwd").focus(function () {
        document.getElementById("user_repwd_error").style.display = "none";
    })
    $(".fp_three_input_user_repwd").blur(function () {
        var repwd = user.user_repwd.value;
        var pwd = user.user_pwd.value;
        if(pwd == ""){
            document.getElementById("user_repwd_error").style.display = "block";
            document.getElementById("user_repwd_error").innerText = "请先输入密码";
        }
        if(pwd != repwd){
            document.getElementById("user_repwd_error").style.display = "block";
            document.getElementById("user_repwd_error").innerText = "两次密码不一致";
        }
    })


    var message_code = document.getElementById("fp_three_input_get_code");
    /*获取验证码*/
    //<![CDATA[
    $("#fp_three_input_get_code").click(function () {
        console.debug("获取验证码");
        var _data = {};
        $.ajax({
            type:"post",
            url:"/vendor/get_code",
            data:JSON.stringify(_data),
            contentType: "application/json",
            success:function (data) {
                console.debug(data);
                document.getElementById("message_code").innerText = data;
            },
            error: function (data, status, er) {
                console.debug("error: "+data+" status: "+status+" er:"+er);
            }
        });
    });
    //]]>
    $("#fp_three_input_get_code").click(function () {
    var countTime = 3;
    function getCodeTime() {
        if(countTime == 0){
            message_code.removeAttribute("disabled");
            message_code.value = "获取验证码";
            countTime = 3;
            return;
        }else {
            message_code.setAttribute("disabled",true);
            message_code.value = countTime + "秒后重试";
            countTime--;
        }
        setTimeout(function () {
            getCodeTime();
        },1000);
    }
    getCodeTime();
    });

    $(".fp_three_button").click(function () {
        var flag = true;
        var phone = user.user_tel.value;
        var pwd = user.user_pwd.value;
        var repwd = user.user_repwd.value;
        var message_code = document.getElementById("message_code");
        var code = user.user_verify.value;
        if(!(/^1[34578]\d{9}$/.test(phone))){
            document.getElementById("user_tel_error").style.display = "block";
            document.getElementById("user_tel_error").innerText = "请输入正确的手机号码";
            flag = false;
        }
        if(code != message_code.innerText){
            console.debug("code.value = "+code.value)
            document.getElementById("message_code_error").style.display = "block";
            document.getElementById("message_code_error").innerText = "验证码错误";
            flag = false;
        }
        if(!(/^(\w){6,16}$/.test(pwd))){
            document.getElementById("user_pwd_error").style.display = "block";
            document.getElementById("user_pwd_error").innerText = "密码长度为6-16位";
            flag = false;
        }
        if(pwd != repwd){
            document.getElementById("user_repwd_error").style.display = "block";
            document.getElementById("user_repwd_error").innerText = "新密码和重复密码不一致";
            flag = false;
        }
        //<![CDATA[
        if(flag){
            var phone = user.user_tel.value;
            var pwd = user.user_pwd.value;
            var _data = {};
            _data.user_tel = phone;
            _data.user_pwd = pwd;
            $.ajax({
                type: 'post',
                url: '/vendor/do_forgetpwd',
                data: JSON.stringify(_data),
                contentType: "application/json",
                success: function (data) {
                    console.debug(data);
                    if(data == "success"){
                        alert("修改成功！");
                        location.href = "/vendor?user_tel="+_data.user_tel;
                    }else {
                        alert("修改失败！");
                    }
                },
                error: function (data, status, er) {
                    console.debug("error: "+data+" status: "+status+" er:"+er);
                }
            })
        }
        //]]>
    })
})