package com.example.prototype.configurationservice.flashcardadapter.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlashcardConfiguration {
    private boolean displayedDash;
    private int timeFlashcard;
    private int daysRepetition;
    private boolean hint;
}
