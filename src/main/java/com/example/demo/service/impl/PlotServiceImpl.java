package com.example.demo.service.impl;

import com.example.demo.domain.Plot;
import com.example.demo.mapper.PlotMapper;
import com.example.demo.service.PlotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2017/6/28.
 */
@Service
public class PlotServiceImpl implements PlotService {

    @Autowired
    PlotMapper plotMapper;

    @Override
    public List<Plot> getAllPlotList() {
        return this.plotMapper.getAllPlotList();
    }

    @Override
    public Plot getPolt(Plot plot) {
        return this.plotMapper.getPlot(plot);
    }

    @Override
    public Plot getPlotByName(Plot plot) {
        return this.plotMapper.getPlotByName(plot);
    }
}
