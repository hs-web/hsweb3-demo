package org.hswebframework.web.demo.datasource;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;

@Configuration
public class DynamicDataSourceConfiguration {

    @ConfigurationProperties("spring.datasource")
    @Primary
    @Bean
    public DataSourceProperties defaultProperties() {
        return new DataSourceProperties();
    }

    @ConfigurationProperties("read.datasource")
    @Bean
    public DataSourceProperties readDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    @ConfigurationProperties("spring.datasource")
    @Primary
    public DataSource dataSource() {
        return defaultProperties().initializeDataSourceBuilder().build();
    }

    @Bean
    @ConfigurationProperties("read.datasource")
    public DataSource readDataSource() {
        return readDataSourceProperties().initializeDataSourceBuilder().build();
    }

}
