package org.hswebframework.web.demo.authorize;

import org.hswebframework.web.authorization.Authentication;
import org.hswebframework.web.authorization.Permission;
import org.hswebframework.web.authorization.Role;
import org.hswebframework.web.authorization.listener.event.AuthorizationSuccessEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * @author Lind
 * @since 1.0
 */
@Component
public class LoginEvent {

    @EventListener
    public void handleLoginSuccess(AuthorizationSuccessEvent event){
        Map<String, Object> result = event.getResult();
        Authentication authentication = event.getAuthentication();
        List<Role> roles = authentication.getRoles();
        result.put("permissions",authentication.getPermissions());
        result.put("roles",roles);
        result.put("user",authentication.getUser());
        result.put("currentAuthority",roles.stream().map(Role::getId).collect(Collectors.toList()));
    }
}
