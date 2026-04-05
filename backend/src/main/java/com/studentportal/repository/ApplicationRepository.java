package com.studentportal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.studentportal.model.Application;

public interface ApplicationRepository extends MongoRepository<Application, String> {
}

