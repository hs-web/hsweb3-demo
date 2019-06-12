package org.hswebframework.web.demo.authorize;

import org.hswebframework.web.authorization.Authentication;
import org.hswebframework.web.authorization.basic.web.GeneratedToken;
import org.hswebframework.web.authorization.basic.web.ParsedToken;
import org.hswebframework.web.authorization.basic.web.UserTokenGenerator;
import org.hswebframework.web.authorization.basic.web.UserTokenParser;
import org.hswebframework.web.id.IDGenerator;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.Collections;
import java.util.Map;

@Component
public class TokenLogin implements UserTokenGenerator, UserTokenParser {
    @Override
    public ParsedToken parseToken(HttpServletRequest httpServletRequest) {
        String token = httpServletRequest.getHeader("access-token");

        if (token==null){
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
            }
        };
    }
}
