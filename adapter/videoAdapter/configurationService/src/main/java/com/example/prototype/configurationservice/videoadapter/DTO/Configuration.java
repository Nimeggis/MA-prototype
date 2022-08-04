package com.example.prototype.configurationservice.videoadapter.DTO;

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
    private boolean accessVideo;
    private boolean skipVideo;
    private boolean pauseVideo;
}
