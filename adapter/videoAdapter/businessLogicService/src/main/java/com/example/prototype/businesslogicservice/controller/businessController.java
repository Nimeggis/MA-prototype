package com.example.prototype.businesslogicservice.controller;

import com.example.prototype.businesslogicservice.DTO.Business;
import com.example.prototype.businesslogicservice.model.BusinessModel;
import com.example.prototype.businesslogicservice.service.BusinessService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@CrossOrigin
@Controller
public class businessController {

    private BusinessService businessService;

    public businessController(BusinessService businessService) {
        this.businessService = businessService;
    }

    ;

    @GetMapping(value = "/test")
    public ResponseEntity<Business> test() {
        return ResponseEntity.ok(new Business("TEST OK"));
    }

    @GetMapping(value = "/getAll")
    public ResponseEntity<List<BusinessModel>> getAll() {
        return ResponseEntity.ok(businessService.test());
    }

    @PostMapping(value = "/createMessage")
    public ResponseEntity<BusinessModel> createMessage(@RequestBody Business business){
        return ResponseEntity.ok(businessService.createMessage(business));
    }
}
