package com.studentportal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.studentportal.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
}


