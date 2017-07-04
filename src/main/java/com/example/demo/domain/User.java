package com.example.demo.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by Administrator on 2017/6/26.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String user_tel;               //电话
    private String user_nickname;       //昵称
    private String user_name;           //姓名
    private String plot_id;                //小区编号
    private String user_add;            //地址
    private String user_pwd;            //密码
    private String user_accessright;       //权限
}
