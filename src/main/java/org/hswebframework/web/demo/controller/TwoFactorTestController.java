package org.hswebframework.web.demo.controller;

import org.hswebframework.web.authorization.annotation.Authorize;
import org.hswebframework.web.authorization.annotation.TwoFactor;
import org.hswebframework.web.controller.message.ResponseMessage;
import org.hswebframework.web.service.authorization.events.TotpTwoFactorCreatedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/two-factor")
public class TwoFactorTestController {

    //新建一个用户，会触发此事件
    @EventListener
    public void handleEvent(TotpTwoFactorCreatedEvent event) {
        System.out.println("用户的双重验证创建成功,将[" + event.getTotpUrl() + "]生成二维码后使用[Google Authenticator]app或者[http://otp.aliyun.com/shenfenbao.html]进行扫描");
    }

    @GetMapping("/test")
    @TwoFactor("test") //开启双重验证
    @Authorize
    public ResponseMessage<String> test() {
        return ResponseMessage.ok();
    }
}
