package com.example.prototype.configurationservice.matchingadapter.model;

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

    @Column(name = "time_matching")
    private int timeMatching;

    @Column(name = "layout")
    private String layout;

    @Column(name = "hint")
    private boolean hint;

    public ConfigurationModel(int courseId, String linkedAdapter, boolean isDisplayedDash, int timeMatching, String layout, boolean hint) {
        this.courseId = courseId;
        this.linkedAdapter = linkedAdapter;
        this.isDisplayedDash = isDisplayedDash;
        this.timeMatching = timeMatching;
        this.layout = layout;
        this.hint = hint;
    }
}
