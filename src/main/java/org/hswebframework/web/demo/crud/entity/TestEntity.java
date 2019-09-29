package org.hswebframework.web.demo.crud.entity;

import lombok.Getter;
import lombok.Setter;
import org.hswebframework.ezorm.rdb.mapping.annotation.ColumnType;
import org.hswebframework.ezorm.rdb.mapping.annotation.JsonCodec;
import org.hswebframework.web.commons.entity.SimpleGenericEntity;

import javax.persistence.Column;
import javax.persistence.Table;
import java.sql.JDBCType;
import java.util.List;

@Table(name = "test_hsweb_demo")
@Getter
@Setter
public class TestEntity extends SimpleGenericEntity<String> {

    @Column
    private String name;

    @Column
    private Integer age;

    @Column
    @ColumnType(jdbcType = JDBCType.LONGNVARCHAR)
    @JsonCodec
    private List<String> tags;

}
