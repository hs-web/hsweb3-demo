package org.hswebframework.web.demo.terms;

import org.hswebframework.ezorm.core.param.Term;
import org.hswebframework.ezorm.rdb.meta.RDBColumnMetaData;
import org.hswebframework.ezorm.rdb.render.SqlAppender;
import org.hswebframework.utils.StringUtils;
import org.hswebframework.web.dao.mybatis.mapper.AbstractSqlTermCustomizer;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 自定义SQL条件例子.
 * <p>
 * //where length(name) > 10
 * createQuery().where("name$len$gt",10).list();
 *
 * @author zhouhao
 * @since 1.0.0
 */
@Component
public class LengthColumnTerm extends AbstractSqlTermCustomizer {
    public LengthColumnTerm() {
        super("len");
    }

    @Override
    public SqlAppender accept(String wherePrefix, Term term, RDBColumnMetaData column, String tableAlias) {
        SqlAppender appender = new SqlAppender();
        List<String> options = term.getOptions();

        //转换为long
        term.setValue(StringUtils.toLong(term.getValue()));

        //支持多种类型
        String logic = options.contains("gt") ? ">"
                : options.contains("lt") ? "<"
                : "=";

        //拼接sql
        appender.add("length(", createColumnName(column, tableAlias), ")",
                logic, "#{", wherePrefix, ".value}");

        return appender;
    }
}
