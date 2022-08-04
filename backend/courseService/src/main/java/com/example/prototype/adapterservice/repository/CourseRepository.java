package com.example.prototype.adapterservice.repository;

import com.example.prototype.adapterservice.model.CourseModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface CourseRepository extends JpaRepository<CourseModel, Integer> {

    // update installed adapters when adapters are installed/uninstalled
    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value="UPDATE courses SET Adapter = :adapterName WHERE ID = :courseId",nativeQuery=true)
    void updateAdapter(String adapterName, Integer courseId);

    // get all installed adapters in a course
    @Query(value="SELECT Adapter FROM courses c WHERE c.ID = :courseId",nativeQuery=true)
    String findInstalledAdapter(Integer courseId);
}
