package com.example.prototype.configurationservice.gamificationadapter.model;

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

    @Column(name = "milestone")
    private int milestone;

    @Column(name = "point_reset")
    private String pointReset;

    @Column(name = "scoreboard")
    private boolean scoreboard;

    public ConfigurationModel(int courseId, String linkedAdapter, boolean isDisplayedDash, int milestone, String pointReset, boolean scoreboard) {
        this.courseId = courseId;
        this.linkedAdapter = linkedAdapter;
        this.isDisplayedDash = isDisplayedDash;
        this.milestone = milestone;
        this.pointReset = pointReset;
        this.scoreboard = scoreboard;
    }
}
