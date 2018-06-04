package org.hswebframework.web.demo.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.Data;
import org.apache.commons.codec.digest.DigestUtils;
import org.hibernate.validator.constraints.NotBlank;
import org.hswebframework.web.BusinessException;
import org.hswebframework.web.authorization.Authentication;
import org.hswebframework.web.authorization.annotation.Authorize;
import org.hswebframework.web.authorization.exception.UnAuthorizedException;
import org.hswebframework.web.authorization.token.TokenState;
import org.hswebframework.web.authorization.token.UserToken;
import org.hswebframework.web.authorization.token.UserTokenHolder;
import org.hswebframework.web.authorization.token.UserTokenManager;
import org.hswebframework.web.controller.message.ResponseMessage;
import org.hswebframework.web.entity.authorization.UserEntity;
import org.hswebframework.web.entity.authorization.UserSettingEntity;
import org.hswebframework.web.service.authorization.UserService;
import org.hswebframework.web.service.authorization.UserSettingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * @author zhouhao
 * @since 1.0
 */
@RestController
@RequestMapping("/user-lock")
@Api(tags = "用户-解锁,锁定操作")
public class UserLockController {

    @Autowired
    private UserTokenManager userTokenManager;

    @Autowired
    private UserSettingService userSettingService;

    @Autowired
    private UserService userService;

    @PutMapping("/lock-password")
    @ApiOperation("修改解锁密码")
    public ResponseMessage<Void> updateLockPassWord(@RequestBody
                                                    @Validated UploadLockPasswordRequest request,
                                                    Authentication authentication) {
        UserEntity userEntity = userService.selectByUserNameAndPassword(authentication.getUser().getUsername(), request.getUserPassword());
        if (userEntity == null) {
            throw new BusinessException("密码错误");
        }
        UserSettingEntity entity = userSettingService.selectByUser(authentication.getUser().getId(), LockKey.key, LockKey.settingId);
        if (entity == null) {
            entity = userSettingService.createEntity();
            entity.setSettingId(LockKey.settingId);
            entity.setKey(LockKey.key);
            entity.setUserId(authentication.getUser().getId());
        }
        entity.setSetting(DigestUtils.md5Hex(request.getLockPassword()));
        userSettingService.saveOrUpdate(entity);
        return ResponseMessage.ok();
    }

    @PutMapping("/lock")
    @ApiOperation("锁定登录")
    public ResponseMessage<Boolean> lock(Authentication authentication) {
        UserSettingEntity entity = userSettingService
                .selectByUser(authentication.getUser().getId(), "lock-password", "unlock");
        if (entity == null) {
            return ResponseMessage.ok(false);
        }
        UserToken token = UserTokenHolder.currentToken();
        if (token != null) {
            userTokenManager.changeTokenState(token.getToken(), TokenState.lock);
        } else {
            userTokenManager.changeUserState(authentication.getUser().getId(), TokenState.lock);
        }
        return ResponseMessage.ok(true);
    }

    @PutMapping("/logout")
    @Authorize(ignore = true)
    @ApiOperation("退出登录")
    public ResponseMessage<Void> logout() {
        UserToken token = UserTokenHolder.currentToken();
        if (token == null) {
            throw new UnAuthorizedException();
        }
        userTokenManager.signOutByToken(token.getToken());
        return ResponseMessage.ok();
    }

    @PutMapping("/un-lock")
    @Authorize(ignore = true)
    @ApiOperation("解锁登录")
    public ResponseMessage<Void> unlock(@RequestBody @Validated UnLockRequest lockPwd) {
        UserToken token = UserTokenHolder.currentToken();
        if (token == null || token.getState() != TokenState.lock) {
            throw new UnAuthorizedException();
        }
        UserSettingEntity entity = userSettingService.selectByUser(token.getUserId(), LockKey.key, LockKey.settingId);
        if (entity == null || !DigestUtils.md5Hex(lockPwd.getLockPassword()).equals(entity.getSetting())) {
            throw new BusinessException("解锁密码错误");
        }
        userTokenManager.changeTokenState(token.getToken(), TokenState.normal);
        return ResponseMessage.ok();
    }

    interface LockKey {
        String key       = "lock-password";
        String settingId = "unlock";
    }

    @Data
    public static class UploadLockPasswordRequest {
        @NotBlank
        private String lockPassword;

        @NotBlank
        private String userPassword;
    }

    @Data
    public static class UnLockRequest {
        @NotBlank
        private String lockPassword;
    }

}
