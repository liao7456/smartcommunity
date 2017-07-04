package com.example.demo.controller;

import com.example.demo.service.QiniuUploadService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Rico on 2017/6/29.
 */
@Controller
@Slf4j
public class CommonController {

    @Autowired
    private QiniuUploadService qiniuUploadService;

    @GetMapping("/upload")
    public String toUploadPage() {
        return "upload";
    }

    @GetMapping("/token")
    @ResponseBody
    public String getUploadToken() {
        log.info("request token");
        String token = this.qiniuUploadService.getUploadToken();
        return token;
    }
}
