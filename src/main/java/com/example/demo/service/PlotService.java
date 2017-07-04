package com.example.demo.service;

import com.example.demo.domain.Plot;

import java.util.List;

/**
 * Created by Administrator on 2017/6/28.
 */
public interface PlotService {

    //查询所有Plot
    public List<Plot> getAllPlotList();

    //得到指定小区
    public Plot getPolt(Plot plot);

    //通过小区名字查询小区id
    public Plot getPlotByName(Plot plot);
}
