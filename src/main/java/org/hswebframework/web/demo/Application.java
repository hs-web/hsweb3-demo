package org.hswebframework.web.demo;

import com.spring4all.swagger.EnableSwagger2Doc;
import org.activiti.spring.boot.JpaProcessEngineAutoConfiguration;
import org.hswebframework.web.authorization.basic.configuration.EnableAopAuthorize;
import org.hswebframework.web.authorization.listener.event.AuthorizingHandleBeforeEvent;
import org.hswebframework.web.dev.tools.EnableDevTools;
import org.hswebframework.web.loggin.aop.EnableAccessLogger;
import org.hswebframework.web.starter.easyorm.EnableEasyormRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.event.EventListener;


/**
 * @author zhouhao
 */
@SpringBootApplication(exclude = JpaProcessEngineAutoConfiguration.class)
@EnableCaching //开启缓存
@EnableAccessLogger //开启访问日志
@EnableAopAuthorize //启用aop权限控制
@EnableSwagger2Doc
@EnableDevTools //开启开发人员工具，生产环境慎用
@EnableEasyormRepository("org.hswebframework.web.demo")
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

