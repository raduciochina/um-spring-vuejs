package com.project.usermanagement.auth;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.Map;

public class UserOAuth2 implements OAuth2User {
    private OAuth2User oAuth2User;

    public UserOAuth2(OAuth2User oAuth2User) {
        this.oAuth2User = oAuth2User;
    }

    @Override
    public <A> A getAttribute(String name) {
        return oAuth2User.getAttribute(name);
    }

    @Override
    public Map<String, Object> getAttributes() {
        return oAuth2User.getAttributes();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return oAuth2User.getAuthorities();
    }

    @Override
    public String getName() {
        return oAuth2User.getAttribute("name");
    }
    public String getEmail() {
        return oAuth2User.getAttribute("email");
    }
}
