package org.hswebframework.web.demo.controller;

import org.hswebframework.web.Maps;
import org.hswebframework.web.authorization.annotation.Authorize;
import org.hswebframework.web.authorization.listener.event.AuthorizationFailedEvent;
import org.hswebframework.web.authorization.listener.event.AuthorizationSuccessEvent;
import org.hswebframework.web.controller.message.ResponseMessage;
import org.hswebframework.web.logging.AccessLogger;
import org.hswebframework.web.logging.events.AccessLoggerAfterEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/request-info")
@AccessLogger(value = "", ignore = true)
public class RequestInfoController {

    private AtomicLong counter = new AtomicLong();

    private AtomicLong loginCounter = new AtomicLong();

    private AtomicLong loginFailCounter = new AtomicLong();


    @GetMapping
    @Authorize
    public ResponseMessage<Map<String, Long>> getRequestCounter() {
        return ResponseMessage.ok(Maps.<String, Long>buildMap()
                .put("request", counter.get())
                .put("login", loginCounter.get())
                .put("loginFail", loginFailCounter.get())

                .get());
    }
    @EventListener
    public void handleLogin(AuthorizationFailedEvent event) {
        loginFailCounter.addAndGet(1);
    }

    @EventListener
    public void handleLogin(AuthorizationSuccessEvent event) {
        loginCounter.addAndGet(1);
    }

    @EventListener
    public void handleRequest(AccessLoggerAfterEvent event) {
        counter.addAndGet(1L);
    }
}
