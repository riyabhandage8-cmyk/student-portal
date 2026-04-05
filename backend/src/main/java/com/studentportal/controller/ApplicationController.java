package com.studentportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.studentportal.model.Application;
import com.studentportal.service.ApplicationService;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "*")
public class ApplicationController {

    @Autowired
    private ApplicationService service;

    @PostMapping
    public Application submit(@RequestBody Application app) {
        return service.saveApplication(app);
    }

    @GetMapping
    public List<Application> getAll() {
        return service.getAllApplications();
    }

    @GetMapping("/{id}")
    public Application getById(@PathVariable String id) {
        return service.getApplicationById(id);
    }

    @PatchMapping("/{id}")
    public Application updateStatus(@PathVariable String id, @RequestParam String status) {
        return service.updateStatus(id, status);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.deleteApplication(id);
    }
}