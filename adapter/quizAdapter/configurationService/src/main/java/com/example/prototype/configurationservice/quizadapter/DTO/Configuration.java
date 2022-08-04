package com.example.prototype.configurationservice.quizadapter.DTO;

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
    private boolean accessQuiz;
    private boolean skipQuiz;
    private boolean hint;
}
