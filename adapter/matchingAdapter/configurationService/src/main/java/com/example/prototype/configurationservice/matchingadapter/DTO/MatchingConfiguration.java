package com.example.prototype.configurationservice.matchingadapter.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MatchingConfiguration {
    private boolean displayedDash;
    private int timeMatching;
    private String layout;
    private boolean hint;
}
