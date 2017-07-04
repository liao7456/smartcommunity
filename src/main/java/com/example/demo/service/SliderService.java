package com.example.demo.service;

import com.example.demo.domain.Slider;

import java.util.List;

/**
 * Created by Administrator on 2017/7/3.
 */
public interface SliderService {

    //得到轮播图
    public List<Slider> getAllSliderList();
    //更新轮播图
    public int updateSlider(Slider slider);
}
