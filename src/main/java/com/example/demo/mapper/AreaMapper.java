package com.example.demo.mapper;

import com.example.demo.domain.Area;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by Administrator on 2017/6/28.
 */
@Mapper
@Component
public interface AreaMapper {

    //得到所有地区
    List<Area> getAllAreaList();
}
