package com.example.prototype.configurationservice.flashcardadapter.model;

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

    @Column(name = "time_flashcard")
    private int timeFlashcard;

    @Column(name = "days_repetition")
    private int daysRepetition;

    @Column(name = "hint")
    private boolean hint;

    public ConfigurationModel(int courseId, String linkedAdapter, boolean isDisplayedDash, int timeFlashcard, int daysRepetition, boolean hint) {
        this.courseId = courseId;
        this.linkedAdapter = linkedAdapter;
        this.isDisplayedDash = isDisplayedDash;
        this.timeFlashcard = timeFlashcard;
        this.daysRepetition = daysRepetition;
        this.hint = hint;
    }
}
