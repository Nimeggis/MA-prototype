package com.example.prototype.configurationservice.gamificationadapter.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GamificationConfiguration {
    private boolean displayedDash;
    private int milestone;
    private String pointReset;
    private boolean scoreboard;
}
