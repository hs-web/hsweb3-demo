# hsweb 3.0 演示

## 接口文档

http://cdn-blog.jetbrains.org.cn/doc/all.html

也可以执行org.hswebframework.web.demo.DemoApplicationTests 自己生成


## 运行
```bash
    $ git clone https://github.com/hs-web/hsweb3-demo.git
    $ ./mvnw spring-boot:run
```

或者导入ide,等待maven依赖下载完后执行: 
``org.hswebframework.web.demo.Application.main``

启动成功后打开: http://localhost:8080 ,帐号:admin 密码:admin

## 无法下载依赖?
查看maven的settings.xml是否配置了私服,删掉或者mirrorOf不要为*

