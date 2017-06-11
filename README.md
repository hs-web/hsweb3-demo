# hsweb 3.0 演示

ui: 使用miniui,简单实现.后续还会重构. [查看UI源码](https://github.com/zhou-hao/hsweb-ui-miniui)

## 运行
```bash
    $ git clone https://github.com/hs-web/hsweb3-demo.git
    $ mvnw spring-boot:run
```

或者导入idea,等待maven以来下载完后执行: ``org.hswebframework.web.demo.Application.main``

启动成功后打开: http://localhost:8081/dist/index.html,帐号:admin 密码:admin

## 无法下载依赖?
查看maven的settings.xml是否配置了私服,删掉或者mirrorOf不要为*