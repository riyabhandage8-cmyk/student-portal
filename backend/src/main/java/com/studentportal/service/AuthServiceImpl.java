package com.studentportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.studentportal.model.User;
import com.studentportal.repository.UserRepository;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public String signup(User user) {

        if (user.getEmail() == null || user.getPassword() == null) {
            return "INVALID_INPUT";
        }

        User existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser != null) {
            return "EMAIL_ALREADY_EXISTS";
        }

        userRepository.save(user);
        return "SIGNUP_SUCCESS";
    }

    @Override
    public String login(User user) {

        if (user.getEmail() == null || user.getPassword() == null) {
            return "INVALID_INPUT";
        }

        User existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser == null) {
            return "USER_NOT_FOUND";
        }

        if (!existingUser.getPassword().equals(user.getPassword())) {
            return "INVALID_PASSWORD";
        }

        return "LOGIN_SUCCESS";
    }
}