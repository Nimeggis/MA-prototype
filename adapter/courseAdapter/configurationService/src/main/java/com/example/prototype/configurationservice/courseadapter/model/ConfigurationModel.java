package com.example.prototype.configurationservice.courseadapter.model;

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

    @Column(name = "period_length")
    private String periodLength;

    @Column(name = "period_start")
    private String periodStart;

    @Column(name = "warning")
    private boolean warning;

    public ConfigurationModel(int courseId, String linkedAdapter, boolean isDisplayedDash, String periodLength, String periodStart, boolean warning) {
        this.courseId = courseId;
        this.linkedAdapter = linkedAdapter;
        this.isDisplayedDash = isDisplayedDash;
        this.periodLength = periodLength;
        this.periodStart = periodLength;
        this.warning = warning;
    }
}
