package com.example.demo.controller;

import com.example.demo.domain.Area;
import com.example.demo.domain.Plot;
import com.example.demo.domain.Slider;
import com.example.demo.domain.User;
import com.example.demo.service.AreaService;
import com.example.demo.service.PlotService;
import com.example.demo.service.SliderService;
import com.example.demo.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Created by Administrator on 2017/6/26.
 */
@Controller
@Slf4j
@RequestMapping("/vendor")
public class ScController {

    @Autowired
    UserService userService;
    @Autowired
    PlotService plotService;
    @Autowired
    AreaService areaService;
    @Autowired
    SliderService sliderService;

    @GetMapping("/test")
    public String toTest(){
        return "test";
    }

    //欢迎页面
    @GetMapping("/index")
    public String toIndex(){
        return "index";
    }

    //主页
    @GetMapping
    public String toVendorIndex(User user,ModelMap modelMap){
        log.info("home");
        if(user.getUser_tel() != null){
            User userselect = this.userService.selectUserByTel(user);
            Plot plot = new Plot();
            plot.setPlot_id(userselect.getPlot_id());
            Plot plotselect = this.plotService.getPolt(plot);
            modelMap.put("user", userselect);
            modelMap.put("plot", plotselect);
        }else{
            User userselect = new User();
            Plot plotselect = new Plot();
            userselect.setUser_nickname("未选择");
            plotselect.setPlot_name("未选择");
            modelMap.put("user", userselect);
            modelMap.put("plot", plotselect);
        }
        List<Slider> slider = sliderService.getAllSliderList();
        modelMap.put("sliderList",slider);
        return "vendor/home";
    }

    //登录页面
    @GetMapping("/login")
    public String toVendorLogin(){
        return "vendor/login";
    }

    //处理登录
    @PostMapping("/do_login")
    @ResponseBody
    public String toDoLogin(@RequestBody User user){
        log.info("--------------------");
        User userselect = this.userService.selectUser(user);
        log.info("user = {}",userselect);
        if(userselect != null){
            return "home";
        }
        return "login";
    }

    //注册页面
    @GetMapping("/signin")
    public String toVendorSignin(){
        return "vendor/signin";
    }

    //城市|小区列表
    @GetMapping("/plot")
    public String toPlot(ModelMap modelMap){
        log.info("-plot-");
        for(Area area : areaService.getAllAreaList()){
            log.info("area_id = {} , area_name = {} ， area_spell = {}",
                    area.getArea_id(),area.getArea_name(),area.getArea_spell());
        }
        for(Plot plot : plotService.getAllPlotList()){
            log.info("plot_id = {} ,area_id = {} , plot_name = {} ， plot_spell = {}",
                    plot.getPlot_id(),plot.getArea_id(),plot.getPlot_name(),plot.getPlot_spell());
        }
        List word = new ArrayList();
        for(char i = 'A' ; i<='Z';i++){
            word.add(i);
        }
        log.info("word = {}",word);
        modelMap.put("word",word);
        modelMap.put("areaList",areaService.getAllAreaList());
        modelMap.put("plotList",plotService.getAllPlotList());
        return "vendor/plot";
    }

    @GetMapping("/forgetpwd")
    public String toVendorForgetpwd(){
        return "vendor/forgetpwd";
    }

    //获取验证码
    @PostMapping("/get_code")
    @ResponseBody
    public String getCode(){
        int max=9999;
        int min=1000;
        Random random = new Random();
        int code = random.nextInt(max)%(max-min+1) + min;
        log.info("code = {}",code);
        return String.valueOf(code);
    }

    //修改密码
    @PostMapping("do_forgetpwd")
    @ResponseBody
    public String replacePwd(@RequestBody User user, ModelMap modelMap){
        log.info("user = "+user);
        int count = this.userService.uploadUserPwd(user);
        log.info("count={}",count);
        if(count != 0){
            return "success";
        }
        return "error";
    }

    //注册
    @PostMapping("/do_signin")
    @ResponseBody
    public String doSignin(@RequestBody User user){
        log.info("user = {}",user);
        int count = userService.newUser(user);
        log.info("count = ",count);
        if(count != 0){
            return "success";
        }else {
            return "error";
        }
    }

    //查询手机号是否存在
    @PostMapping("/selectTel")
    @ResponseBody
    public String selectTel(@RequestBody User user){
        User user1 = userService.selectTel(user);
        if (user1 != null){
            return "error";
        }else{
            return "success";
        }
    }
    //更新url
    @PostMapping("/upload_slider")
    @ResponseBody
    public String uploadSlider(@RequestBody Slider slider) {
        log.info("更新url");
        int count = this.sliderService.updateSlider(slider);
        if (count != 0){
            return "success";
        }else {
            return "error";
        }
    }
}
