package com.example.demo.service.impl;

import com.example.demo.domain.Area;
import com.example.demo.mapper.AreaMapper;
import com.example.demo.service.AreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2017/6/28.
 */
@Service
public class AreaServiceImpl implements AreaService {

    @Autowired
    AreaMapper areaMapper;
    @Override
    public List<Area> getAllAreaList() {
        return this.areaMapper.getAllAreaList();
    }
}
