package com.example.prototype.configurationservice.gamificationadapter.DTO;

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
    private int milestone;
    private String pointReset;
    private boolean scoreboard;
}
