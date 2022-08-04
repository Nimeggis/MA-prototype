package com.example.prototype.configurationservice.courseadapter.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseConfiguration {
    private boolean displayedDash;
    private String periodLength;
    private String periodStart;
    private boolean warning;
}
