package com.example.prototype.adapterservice.repository;

import com.example.prototype.adapterservice.model.AdapterModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdapterRepository extends JpaRepository<AdapterModel, Integer> {

    // get adapter ID by adapter name
    @Query(value="SELECT ID FROM Adapter a WHERE a.Name = ?1",nativeQuery=true)
    String findByAdapterName(String adapterName);
}
