package org.hswebframework.web.demo.controller;

import org.hswebframework.web.authorization.annotation.Authorize;
import org.hswebframework.web.controller.message.ResponseMessage;
import org.hswebframework.web.logging.AccessLogger;
import org.hswebframework.web.logging.events.AccessLoggerAfterEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/request-info")
public class RequestInfoController {

    private AtomicLong counter = new AtomicLong();

    @GetMapping("/request-counter")
    @Authorize
    public ResponseMessage<Long> getRequestCounter() {
        return ResponseMessage.ok(counter.get());
    }


    @EventListener
    @AccessLogger(value = "",ignore = true)
    public void handleRequest(AccessLoggerAfterEvent event) {
        counter.addAndGet(1L);
    }
}
