package com.example.demo.service.impl;

import com.example.demo.domain.User;
import com.example.demo.mapper.UserMapper;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Administrator on 2017/6/26.
 */
@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserMapper userMapper;
    @Override
    public int newUser(User user) {
        return this.userMapper.newUser(user);
    }

    @Override
    public User selectUser(User user) {
        return this.userMapper.selectUser(user);
    }

    @Override
    public User selectUserByTel(User user) {
        return this.userMapper.selectUserByTel(user);
    }

    @Override
    public User selectTel(User user) {
        return userMapper.selectTel(user);
    }

    @Override
    public int uploadUserPwd(User user) {
        return this.userMapper.uploadUserPwd(user);
    }
}
