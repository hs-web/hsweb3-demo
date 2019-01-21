# hsweb 3.0 演示

## 接口文档

http://cdn-blog.jetbrains.org.cn/doc/all.html

也可以执行org.hswebframework.web.demo.DemoApplicationTests 自己生成


## 运行
```bash
    $ git clone https://github.com/hs-web/hsweb3-demo.git
    $ ./mvnw spring-boot:run
```

docker:
```bash
    $ docker run -d --name hsweb3-demo -p 8089:8089 hsweb/hsweb-demo:3.0.1
```

或者导入ide,等待maven依赖下载完后执行: 
``org.hswebframework.web.demo.Application.main``

启动成功后打开: http://localhost:8089 ,帐号:admin 密码:admin

## 无法下载依赖?
查看maven的settings.xml是否配置了私服,删掉或者mirrorOf不要为*


## 注意
本项目是完全开源的,但是由于miniui并非开源项目,仅作为演示hsweb功能,学习所用.如果要将此项目用于商用,请先获得miniui许可.我们正在开发[基于layui的前端实现](https://github.com/hs-web/hsweb-ui-layui),敬请期待.
