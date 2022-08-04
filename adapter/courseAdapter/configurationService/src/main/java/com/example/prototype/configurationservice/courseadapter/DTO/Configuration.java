package com.example.prototype.configurationservice.courseadapter.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Configuration {
    private int courseId;
    private String linkedAdapter;
    private boolean isDisplayedDash;
    private String periodLength;
    private String periodStart;
    private boolean warning;
}
