package com.example.prototype.dashboardservice.controller;

import com.example.prototype.dashboardservice.model.DashboardModel;
import com.example.prototype.dashboardservice.service.DashboardService;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@Controller
public class DashboardController {

    private DashboardService dashboardService;

    // constructor
    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    // REST GET
    // get adapter of course which are enabled as dashboard widget
    @GetMapping(value = "/getDashAdapter/{courseId}")
    public ResponseEntity<List<DashboardModel>> getDashAdapter(@PathVariable int courseId){
        return ResponseEntity.ok(dashboardService.getDashAdapter(courseId));
    }

}
