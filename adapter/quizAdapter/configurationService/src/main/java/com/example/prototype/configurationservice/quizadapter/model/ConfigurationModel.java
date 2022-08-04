package com.example.prototype.configurationservice.quizadapter.model;

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

    @Column(name = "access_quiz")
    private boolean accessQuiz;

    @Column(name = "skip_quiz")
    private boolean skipQuiz;

    @Column(name = "hint")
    private boolean hint;

    public ConfigurationModel(int courseId, String linkedAdapter, boolean isDisplayedDash, boolean accessQuiz, boolean skipQuiz, boolean hint) {
        this.courseId = courseId;
        this.linkedAdapter = linkedAdapter;
        this.isDisplayedDash = isDisplayedDash;
        this.accessQuiz = accessQuiz;
        this.skipQuiz = skipQuiz;
        this.hint = hint;
    }
}
