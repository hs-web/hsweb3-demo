package org.hswebframework.web.demo.token;

import org.hswebframework.web.authorization.Authentication;
import org.hswebframework.web.authorization.basic.web.GeneratedToken;
import org.hswebframework.web.authorization.basic.web.ParsedToken;
import org.hswebframework.web.authorization.basic.web.UserTokenGenerator;
import org.hswebframework.web.authorization.basic.web.UserTokenParser;
import org.hswebframework.web.authorization.listener.event.AuthorizationSuccessEvent;
import org.hswebframework.web.id.IDGenerator;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Collections;
import java.util.Map;

//@Component
public class SimpleTokenParserAndGenerator implements UserTokenParser, UserTokenGenerator {
    @Override
    public String getSupportTokenType() {
        return "token";
    }

    @Override
    public GeneratedToken generate(Authentication authentication) {
        String token = IDGenerator.MD5.generate();

        return new GeneratedToken() {
            @Override
            public Map<String, Object> getResponse() {
                return Collections.singletonMap("token",token);
            }

            @Override
            public String getToken() {
                return token;
            }

            @Override
            public String getType() {
                return getSupportTokenType();
            }

            @Override
            public int getTimeout() {
                return -1;
            } //永不过期。
        };
    }

    @Override
    public ParsedToken parseToken(HttpServletRequest request) {
        String token = request.getHeader("access-token");
        if(StringUtils.isEmpty(token)){
            return null;
        }

        return new ParsedToken() {
            @Override
            public String getToken() {
                return token;
            }

            @Override
            public String getType() {
                return getSupportTokenType();
            }
        };
    }

    @EventListener
    public void handleLoginSuccessEvent(AuthorizationSuccessEvent event){
        event.getResult().put("autz",event.getAuthentication());
    }
}
