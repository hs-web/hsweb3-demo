package org.hswebframework.web.demo.swagger;

import org.hswebframework.web.authorization.Authentication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

//@Configuration
//@EnableSwagger2
public class SwaggerConfiguration {
    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .groupName("example")
                .ignoredParameterTypes(HttpSession.class, Authentication.class, HttpServletRequest.class, HttpServletResponse.class)
                .select()
                .apis(RequestHandlerSelectors.basePackage("org.hswebframework.web"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("hsweb 3.0 api")
                .description("hsweb 企业后台管理基础框架")
                .termsOfServiceUrl("http://www.hsweb.me/")
                .license("apache 2.0")
                .version("3.0")
                .build();
    }
}
