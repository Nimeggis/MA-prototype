package com.example.prototype.configurationservice.courseadapter.repository;

import com.example.prototype.configurationservice.courseadapter.model.ConfigurationModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ConfigurationRepository extends JpaRepository<ConfigurationModel, Integer> {

    // initial creation of adapter configuration with default values
    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value="INSERT INTO config (courseID, linked_adapter, is_displayed_dash, period_length, period_start, warning) VALUES (:courseId, '0', true, 'oneWeek', 'monday', true)",nativeQuery=true)
    void createConfig(Integer courseId);

    // deletion of adapter configuration for a specific course
    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value="DELETE FROM config WHERE courseID = :courseId",nativeQuery=true)
    void deleteConfig(Integer courseId);

    // get adapter configuration by course ID
    @Query(value="SELECT * FROM config c WHERE c.courseId = ?1",nativeQuery=true)
    ConfigurationModel getConfig(int courseId);

    // update adapter configuration with new linked/unlinked adapter
    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value="UPDATE config SET linked_adapter = :adapterIds WHERE courseID = :courseId",nativeQuery=true)
    void setAdapterConfig(Integer courseId, String adapterIds);

    // update complete adapter configuration with new values
    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value="UPDATE config SET is_displayed_dash = :isDisplayed, period_length = :periodLength, period_start = :periodStart, warning = :warning WHERE courseID = :courseId",nativeQuery=true)
    void updateConfig(Integer courseId, Boolean isDisplayed, String periodLength, String periodStart, Boolean warning);
}
