package com.example.demo.mapper;

import com.example.demo.domain.Plot;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by Administrator on 2017/6/28.
 */
@Mapper
@Component
public interface PlotMapper {

    //得到所有小区
    List<Plot> getAllPlotList();

    //得到指定小区
    Plot getPlot(Plot plot);

    //通过小区名字查询小区
    Plot getPlotByName(Plot plot);
}
