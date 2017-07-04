package com.example.demo.service;

import com.example.demo.domain.User;

/**
 * Created by Administrator on 2017/6/26.
 */
public interface UserService {
    //新建
    public int newUser(User user);
    //查询
    public User selectUser(User user);
    //查询
    public User selectUserByTel(User user);
    //查询用户是否存在
    public User selectTel(User user);
    //修改密码
    public int uploadUserPwd(User user);
}
