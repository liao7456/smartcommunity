/**
 * Created by Administrator on 2017/6/27.
 */
$(function () {
    /*验证手机号码*/
    $(".user_tel").focus(function () {
        document.getElementById("user_tel_error").style.display = "none";
        if(this.value == "请输入手机号"){
            this.value = "";
        }
    })
    $(".user_tel").blur(function () {
        if(this.value == ""){
            this.value = "请输入手机号";
        }
        var phone = signin.user_tel.value;
        if(!(/^1[34578]\d{9}$/.test(phone))){
            document.getElementById("user_tel_error").style.display = "block";
            document.getElementById("user_tel_error").innerText = "请输入正确的手机号码";
        }else{
            //<![CDATA[
            var _data = {};
            _data.user_tel = phone;
            console.debug(_data);
            $.ajax({
                type: 'post',
                url: '/vendor/selectTel',
                data: JSON.stringify(_data),
                contentType: "application/json",
                success: function (data) {
                    console.debug(data);
                    if(data == "error"){
                        document.getElementById("user_tel_error").style.display = "block";
                        document.getElementById("user_tel_error").innerText = "手机号码已被注册，请重新输入";
                    }
                },
                error: function (data, status, er) {
                    console.debug("error: "+data+" status: "+status+" er:"+er);
                }
            });
            //]]>
        }
    })

    /*验证验证码*/
    $(".signin_three_body_message_code").focus(function () {
        document.getElementById("user_verify_error").style.display = "none";
    })
    $(".signin_three_body_message_code").blur(function () {
        var message_code = document.getElementById("message_code");
        console.debug(message_code.innerText);
        if(message_code.innerText == ""){
            document.getElementById("user_verify_error").style.display = "block";
            document.getElementById("user_verify_error").innerText = "请获取验证码";
        }else {
            if(this.value != message_code.innerText){
                document.getElementById("user_verify_error").style.display = "block";
                document.getElementById("user_verify_error").innerText = "验证码错误";
            }
        }
    })

    /*验证真实姓名*/
    $(".user_name").focus(function () {
        document.getElementById("user_name_error").style.display = "none";
        if(this.value == "请输入姓名"){
            this.value = "";
        }
    })
    $(".user_name").blur(function () {
        if(this.value == ""){
            this.value = "请输入姓名";
            document.getElementById("user_name_error").style.display = "block";
            document.getElementById("user_name_error").innerText = "请输入姓名";
        }
    })

    /*验证详细地址*/
    $(".user_add").focus(function () {
        document.getElementById("user_add_error").style.display = "none";
        if(this.value == "请输入详细地址"){
            this.value = "";
        }
    })
    $(".user_add").blur(function () {
        if(this.value == ""){
            this.value = "请输入详细地址";
            document.getElementById("user_add_error").style.display = "block";
            document.getElementById("user_add_error").innerText = "请输入详细地址";
        }
    })

    /*验证新密码*/
    $(".user_pwd").focus(function () {
        document.getElementById("user_pwd_error").style.display = "none";
    })
    $(".user_pwd").blur(function () {
        var pwd = signin.user_pwd.value;
        if(!(/^(\w){6,16}$/.test(pwd))){
            document.getElementById("user_pwd_error").style.display = "block";
            document.getElementById("user_pwd_error").innerText = "密码长度为6-16位";
        }
    })

    /*验证重复密码*/
    $(".user_repwd").focus(function () {
        document.getElementById("user_repwd_error").style.display = "none";
    })
    $(".user_repwd").blur(function () {
        var repwd = signin.user_repwd.value;
        var pwd = signin.user_pwd.value;
        if(pwd == ""){
            document.getElementById("user_repwd_error").style.display = "block";
            document.getElementById("user_repwd_error").innerText = "请先输入密码";
        }
        if(pwd != repwd){
            document.getElementById("user_repwd_error").style.display = "block";
            document.getElementById("user_repwd_error").innerText = "两次密码不一致";
        }
    })

    var message_code = document.getElementById("signin_three_input_get_code");
    /*获取验证码*/
    //<![CDATA[
    $("#signin_three_input_get_code").click(function () {
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
    $("#signin_three_input_get_code").click(function () {
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

    //跳转小区
    $(".plot_id").click(function () {
        window.open("/vendor/plot");
    })
    $(".plot_id").focus(function () {
        document.getElementById("plot_id_error").style.display = "none";
    })
    $(".plot_id").blur(function () {
        var plot = signin.plot_id.value;
        if(plot == "点击选择小区"){
            document.getElementById("plot_id_error").style.display = "block";
            document.getElementById("plot_id_error").innerText = "请选择小区";
        }
    })

    /*验证详细地址*/
    $(".user_add").focus(function () {
        document.getElementById("user_add_error").style.display = "none";
    })
    $(".user_add").blur(function () {
        var plot = signin.user_add.value;
        if(plot == "点击选择小区"){
            document.getElementById("user_add_error").style.display = "block";
            document.getElementById("user_add_error").innerText = "请选择小区";
        }
    })

    //注册验证
    //<![CDATA[
    $(".signin_three_button").click(function () {
        var flag = true;
        var phone = signin.user_tel.value;
        var nickname = signin.user_nickname.value;
        var name = signin.user_name.value;
        var add = signin.user_add.value;
        var plot = signin.plot_id.value;
        var pwd = signin.user_pwd.value;
        var repwd = signin.user_repwd.value;
        var message_code = document.getElementById("message_code");
        var code = signin.user_verify.value;
        if(!(/^1[34578]\d{9}$/.test(phone))||document.getElementById("user_tel_error").style.display == "block"){
            document.getElementById("user_tel_error").style.display = "block";
            document.getElementById("user_tel_error").innerText = "请输入正确的手机号码";
            flag = false;
        }
        if(code != message_code.innerText){
            console.debug("code.value = "+code);
            document.getElementById("user_verify_error").style.display = "block";
            document.getElementById("user_verify_error").innerText = "验证码错误";
            flag = false;
        }
        if(code == ""){
            console.debug("code.value = null");
            document.getElementById("user_verify_error").style.display = "block";
            document.getElementById("user_verify_error").innerText = "请输入验证码";
            flag = false;
        }
        if(nickname == ""){
            var sub = phone.substring(3,8);
            nickname = phone.replace(sub,"*****");
            console.debug(nickname)
        }
        if(name == ""){
            document.getElementById("user_name_error").style.display = "block";
            document.getElementById("user_name_error").innerText = "请输入真实姓名";
            flag = false;
        }
        if(plot == "点击选择小区"){
            document.getElementById("plot_id_error").style.display = "block";
            document.getElementById("plot_id_error").innerText = "请选择小区";
            flag = false;
        }
        if(add == ""){
            document.getElementById("user_add_error").style.display = "block";
            document.getElementById("user_add_error").innerText = "请输入详细地址";
            flag = false;
        }
        if(!(/^(\w){6,16}$/.test(pwd))){
            document.getElementById("user_pwd_error").style.display = "block";
            document.getElementById("user_pwd_error").innerText = "密码长度为6-16位";
            flag = false;
        }
        if(pwd != repwd){
            document.getElementById("user_repwd_error").style.display = "block";
            document.getElementById("user_repwd_error").innerText = "密码和重复密码不一致";
            flag = false;
        }
        console.debug(flag);
        if(flag){
            var _data = {};
            _data.plot_id = document.getElementById("plot_id").name;
            _data.user_tel = signin.user_tel.value;
            _data.user_nickname = nickname;
            _data.user_name = signin.user_name.value;
            _data.user_add = signin.user_add.value;
            _data.user_pwd = signin.user_pwd.value;
            _data.user_accessright = signin.user_accessright.value;
            console.debug(_data);
            $.ajax({
                type: 'post',
                url: '/vendor/do_signin',
                data: JSON.stringify(_data),
                contentType: "application/json",
                success: function (data) {
                    console.debug(data);
                    if(data == "success"){
                        alert("注册成功！");
                        location.href = "/vendor/login";
                    }else {
                        alert("注册失败！");
                    }
                },
                error: function (data, status, er) {
                    console.debug("error: "+data+" status: "+status+" er:"+er);
                }
            });
        }
    })
    //]]>
})

