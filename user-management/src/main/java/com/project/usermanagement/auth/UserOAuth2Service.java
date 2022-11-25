package com.project.usermanagement.auth;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
public class UserOAuth2Service extends DefaultOAuth2UserService {
    @Override
    public UserOAuth2 loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        return new UserOAuth2(super.loadUser(userRequest));
    }
}
