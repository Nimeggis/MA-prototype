package com.example.prototype.adapterservice.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Adapter {
    private String adapterName;
    private String adapterDescription;
    private Boolean adapterCreateContent;
    private String compatibleAdapters;
    private String shortName;
}
