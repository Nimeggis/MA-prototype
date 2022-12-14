package com.example.prototype.businesslogicservice.repository;

import com.example.prototype.businesslogicservice.model.BusinessModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessRepository extends JpaRepository<BusinessModel, Integer> {

}
