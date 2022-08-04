package com.example.prototype.adapterservice.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {
    private String courseName;
    private String courseDescription;
    private Date courseStart;
    private Date courseEnd;
    private String courseAdapter;
    private String fieldofstudy;
}
