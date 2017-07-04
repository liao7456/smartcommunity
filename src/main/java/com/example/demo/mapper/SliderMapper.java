package com.example.demo.mapper;

import com.example.demo.domain.Slider;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by Administrator on 2017/7/3.
 */
@Mapper
@Component
public interface SliderMapper {
    //得到轮播图
    List<Slider> getAllSliderList();
    //更新轮播图
    int updateSlider(Slider slider);
}
