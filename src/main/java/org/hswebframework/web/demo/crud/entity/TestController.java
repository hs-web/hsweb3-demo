package org.hswebframework.web.demo.crud.entity;

import org.hswebframework.ezorm.rdb.mapping.SyncRepository;
import org.hswebframework.web.authorization.annotation.Authorize;
import org.hswebframework.web.commons.entity.param.QueryParamEntity;
import org.hswebframework.web.controller.message.ResponseMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/test")
@Authorize
public class TestController {

    @Autowired
    private SyncRepository<TestEntity,String> repository;

    @PostMapping
    public ResponseMessage<String> testInsert(@RequestBody TestEntity entity){
        repository.insert(entity);
        return ResponseMessage.ok();
    }

    @PostMapping("/_query")
    public ResponseMessage<List<TestEntity>> testQuery(@RequestBody QueryParamEntity entity){

        return ResponseMessage.ok(repository.createQuery().setParam(entity).fetch());
    }
}
