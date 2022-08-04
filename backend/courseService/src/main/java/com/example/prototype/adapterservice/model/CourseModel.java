package com.example.prototype.adapterservice.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Table(name = "courses")
@Entity
@Data
@NoArgsConstructor
public class CourseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int ID;

    @Column(name = "Name")
    private String courseName;

    @Column(name = "Description")
    private String courseDescription;

    @Column(name = "Start")
    private Date courseStart;

    @Column(name = "End")
    private Date courseEnd;

    @Column(name = "Adapter")
    private String courseAdapter;

    @Column(name = "Fieldofstudy")
    private String fieldofstudy;

    public CourseModel(String courseName, String courseDescription, Date courseStart, Date courseEnd, String courseAdapter, String fieldofstudy) {
        this.courseName = courseName;
        this.courseDescription = courseDescription;
        this.courseStart = courseStart;
        this.courseEnd = courseEnd;
        this.courseAdapter = courseAdapter;
        this.fieldofstudy = fieldofstudy;
    }
}
