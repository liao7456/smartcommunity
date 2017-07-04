package com.example.demo.service.impl;

import com.example.demo.service.QiniuUploadService;
import com.qiniu.util.Auth;
import org.springframework.stereotype.Service;

/**
 * Created by Rico on 2017/6/29.
 */
@Service
public class QiniuUploadServiceImpl implements QiniuUploadService {


    private static  final String ACCESS_KEY = "aejaqUWmKRQhjPDntdLHIeu8jus5xNxEF8L7Fldx";
    private static final String SECRET_KEY = "kdKGQfoHz82rSeNshFu9tlw93-WoB6JAfdwiB66t";
    private static final String BUCKET_NAME = "smartcommumity";
    private Auth auth;

    public QiniuUploadServiceImpl() {
        this.auth = Auth.create(ACCESS_KEY, SECRET_KEY);
    }


    @Override
    public String getUploadToken() {
        return auth.uploadToken(BUCKET_NAME);
    }
}
