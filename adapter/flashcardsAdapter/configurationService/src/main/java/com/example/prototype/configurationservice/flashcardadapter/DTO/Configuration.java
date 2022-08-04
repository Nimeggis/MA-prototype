package com.example.prototype.configurationservice.flashcardadapter.DTO;

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
    private int timeFlashcard;
    private int daysRepetition;
    private boolean hint;
}
