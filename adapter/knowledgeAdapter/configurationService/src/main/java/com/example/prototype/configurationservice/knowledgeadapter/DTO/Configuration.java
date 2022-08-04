package com.example.prototype.configurationservice.knowledgeadapter.DTO;

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
    private String colorSuccess;
    private String colorInProgress;
    private String colorUpcoming;
}

