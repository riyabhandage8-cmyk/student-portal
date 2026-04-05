package com.studentportal.service;

import com.studentportal.model.User;

public interface AuthService {
    String signup(User user);
    String login(User user);
}