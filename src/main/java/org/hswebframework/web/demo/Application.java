package org.hswebframework.web.demo;

import com.spring4all.swagger.EnableSwagger2Doc;
import org.hswebframework.web.authorization.basic.configuration.EnableAopAuthorize;
import org.hswebframework.web.authorization.listener.event.AuthorizingHandleBeforeEvent;
import org.hswebframework.web.dao.Dao;
import org.hswebframework.web.dev.tools.EnableDevTools;
import org.hswebframework.web.loggin.aop.EnableAccessLogger;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.event.EventListener;


/**
 * @author zhouhao
 */
@SpringBootApplication
@EnableCaching //开启缓存
@EnableAccessLogger //开启访问日志
@MapperScan(value = "org.hswebframework.web.demo", markerInterface = Dao.class) //扫描mybatis dao
@EnableAopAuthorize //启用aop权限控制
@EnableSwagger2Doc
@EnableDevTools //开启开发人员工具，生产环境慎用
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class);
    }

    @EventListener
    public void onApplicationEvent(AuthorizingHandleBeforeEvent event) {
        //admin 拥有所有权限
        if (event.getContext().getAuthentication().getUser().getUsername().equals("admin")) {
            event.setAllow(true);
        }
    }
}

