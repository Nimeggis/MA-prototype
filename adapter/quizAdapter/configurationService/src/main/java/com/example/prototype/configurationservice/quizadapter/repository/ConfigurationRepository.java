package com.example.prototype.configurationservice.quizadapter.repository;

import com.example.prototype.configurationservice.quizadapter.model.ConfigurationModel;

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
    @Query(value="INSERT INTO config (courseID, linked_adapter, is_displayed_dash, access_quiz, skip_quiz, hint) VALUES (:courseId, '0', true, true, false, true)",nativeQuery=true)
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
    @Query(value="UPDATE config SET is_displayed_dash = :isDisplayed, access_quiz = :accessQuiz, skip_quiz = :skipQuiz, hint = :hint WHERE courseID = :courseId",nativeQuery=true)
    void updateConfig(Integer courseId, Boolean isDisplayed, Boolean accessQuiz, Boolean skipQuiz, Boolean hint);
}
