package com.example.prototype.configurationservice.knowledgeadapter.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class KnowledgeConfiguration {
    private boolean displayedDash;
    private String colorSuccess;
    private String colorInProgress;
    private String colorUpcoming;
}
