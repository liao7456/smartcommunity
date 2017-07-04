package com.example.demo.mapper;

import com.example.demo.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

/**
 * Created by Administrator on 2017/6/26.
 */
@Mapper
@Component
public interface UserMapper {

    //新建用户
    int newUser(User user);

    //查询用户
    User selectUser(User user);

    //查询用户是否存在
    User selectTel(User user);

    //查询用户
    User selectUserByTel(User user);

    //修改密码
    int uploadUserPwd(User user);
}
