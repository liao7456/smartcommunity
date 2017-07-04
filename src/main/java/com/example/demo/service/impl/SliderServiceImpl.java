package com.example.demo.service.impl;

import com.example.demo.domain.Slider;
import com.example.demo.mapper.SliderMapper;
import com.example.demo.service.SliderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2017/7/3.
 */
@Service
public class SliderServiceImpl implements SliderService {

    @Autowired
    SliderMapper sliderMapper;


    @Override
    public List<Slider> getAllSliderList() {
        return this.sliderMapper.getAllSliderList();
    }

    @Override
    public int updateSlider(Slider slider) {
        return this.sliderMapper.updateSlider(slider);
    }
}
