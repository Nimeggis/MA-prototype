package com.example.prototype.configurationservice.videoadapter.model;

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

    @Column(name = "access_video")
    private boolean accessVideo;

    @Column(name = "skip_video")
    private boolean skipVideo;

    @Column(name = "pause_video")
    private boolean pauseVideo;

    public ConfigurationModel(int courseId, String linkedAdapter, boolean isDisplayedDash, boolean accessVideo, boolean skipVideo, boolean pauseVideo) {
        this.courseId = courseId;
        this.linkedAdapter = linkedAdapter;
        this.isDisplayedDash = isDisplayedDash;
        this.accessVideo = accessVideo;
        this.skipVideo = skipVideo;
        this.pauseVideo = pauseVideo;
    }
}
