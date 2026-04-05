package com.studentportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.studentportal.model.Application;
import com.studentportal.repository.ApplicationRepository;

import java.util.List;

@Service
public class ApplicationServiceImpl implements ApplicationService {

    @Autowired
    private ApplicationRepository repository;

    @Override
    public Application saveApplication(Application app) {
        return repository.save(app);
    }

    @Override
    public List<Application> getAllApplications() {
        return repository.findAll();
    }

    @Override
    public void deleteApplication(String id) {
        repository.deleteById(id);
    }

    @Override
    public Application updateStatus(String id, String status) {
        Application app = repository.findById(id).orElse(null);
        if (app != null) {
            app.setStatus(status);
            return repository.save(app);
        }
        return null;
    }

	@Override
	public Application getApplicationById(String id) {
		// TODO Auto-generated method stub
		return null;
	}
}