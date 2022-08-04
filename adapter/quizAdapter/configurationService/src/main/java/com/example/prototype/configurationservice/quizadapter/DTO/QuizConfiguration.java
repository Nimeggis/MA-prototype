package com.example.prototype.configurationservice.quizadapter.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuizConfiguration {
    private boolean displayedDash;
    private boolean accessQuiz;
    private boolean skipQuiz;
    private boolean hint;
}
