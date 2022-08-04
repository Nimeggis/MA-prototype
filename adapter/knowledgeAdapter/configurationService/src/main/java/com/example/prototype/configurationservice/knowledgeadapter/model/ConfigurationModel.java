package com.example.prototype.configurationservice.knowledgeadapter.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "config")
@Entity
@Data
@NoArgsConstructor
public class ConfigurationModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int ID;

    @Column(name = "courseID")
    private int courseId;

    @Column(name = "linked_adapter")
    private String linkedAdapter;

    @Column(name = "is_displayed_dash")
    private boolean isDisplayedDash;

    @Column(name = "color_success")
    private String colorSuccess;

    @Column(name = "color_in_progress")
    private String colorInProgress;

    @Column(name = "color_upcoming")
    private String colorUpcoming;

    public ConfigurationModel(int courseId, String linkedAdapter, boolean isDisplayedDash, String colorSuccess, String colorInProgress, String colorUpcoming) {
        this.courseId = courseId;
        this.linkedAdapter = linkedAdapter;
        this.isDisplayedDash = isDisplayedDash;
        this.colorSuccess = colorSuccess;
        this.colorInProgress = colorInProgress;
        this.colorUpcoming = colorUpcoming;
    }
}