package org.hswebframework.web.demo;

import com.spring4all.swagger.EnableSwagger2Doc;
import org.hswebframework.web.authorization.basic.configuration.EnableAopAuthorize;
import org.hswebframework.web.authorization.listener.event.AuthorizingHandleBeforeEvent;
import org.hswebframework.web.dao.Dao;
import org.hswebframework.web.loggin.aop.EnableAccessLogger;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

/**
 * @author zhouhao
 */
@EnableAspectJAutoProxy
@SpringBootApplication
@EnableCaching //开启缓存
@EnableAccessLogger //开启访问日志
@ComponentScan("org.hswebframework.web.demo")
@MapperScan(value = "org.hswebframework.web.demo", markerInterface = Dao.class) //扫描mybatis dao
@EnableAopAuthorize //启用aop权限控制
@EnableSwagger2Doc
public class Application implements ApplicationListener<AuthorizingHandleBeforeEvent> {


    public static void main(String[] args) {
        SpringApplication.run(Application.class);
    }

    @Override
    public void onApplicationEvent(AuthorizingHandleBeforeEvent event) {
        //admin 拥有所有权限
        if(event.getContext().getAuthentication().getUser().getUsername().equals("admin")){
            event.setAllow(true);
        }
    }
}

