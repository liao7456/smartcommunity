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
public class Area {
    private String area_id;        //地区编号
    private String area_name;   //地区名字
    private String area_spell;  //地区首写拼音
}
