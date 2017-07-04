package com.example.demo.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by Administrator on 2017/6/26.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Plot {
    private String plot_id;         //小区编号
    private String area_id;         //地区编号
    private String plot_name;       //小区名字
    private String plot_spell;      //小区首写字母
}
