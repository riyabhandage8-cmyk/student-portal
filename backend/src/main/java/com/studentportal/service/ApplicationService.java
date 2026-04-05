package com.studentportal.service;

import com.studentportal.model.Application;
import java.util.List;

public interface ApplicationService {

    Application saveApplication(Application app);

    List<Application> getAllApplications();

    void deleteApplication(String id);

    Application updateStatus(String id, String status);

	Application getApplicationById(String id);
}