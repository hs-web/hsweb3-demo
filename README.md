# hsweb 3.0 演示


## 运行
```bash
    $ git clone https://github.com/hs-web/hsweb3-demo.git
    $ cd hsweb3-demo
    $ ./mvnw install
    $ cd hsweb-demo-starter
    $ ./mvnw spring-boot:run
```

或者导入ide,进入hsweb-demo-starter模块,等待maven依赖下载完后执行: 
``org.hswebframework.web.demo.Application.main``

启动成功后打开: http://localhost:8080 ,帐号:admin 密码:admin

## 无法下载依赖?
查看maven的settings.xml是否配置了私服,删掉或者mirrorOf不要为*