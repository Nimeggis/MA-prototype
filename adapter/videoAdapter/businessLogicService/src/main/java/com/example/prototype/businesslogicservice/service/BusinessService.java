package com.example.prototype.businesslogicservice.service;

import com.example.prototype.businesslogicservice.DTO.Business;
import com.example.prototype.businesslogicservice.model.BusinessModel;
import com.example.prototype.businesslogicservice.repository.BusinessRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessService {

    private BusinessRepository businessRepository;

    public BusinessService(BusinessRepository businessRepository) {
        this.businessRepository = businessRepository;
    }

    public List<BusinessModel> test() {
        return businessRepository.findAll();
    }

    public BusinessModel createMessage(Business business) {
        return businessRepository.save(new BusinessModel(business.getMessage()));
    }

}
