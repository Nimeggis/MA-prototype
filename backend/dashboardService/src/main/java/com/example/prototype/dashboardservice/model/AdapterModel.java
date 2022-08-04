package com.example.prototype.dashboardservice.model;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class AdapterModel {
    private int ID;

    private String adapterName;

    private String adapterDescription;

    private Boolean adapterCreateContent;

    private String compatibleAdapters;

    private String shortName;

    public AdapterModel(String adapterName, String adapterDescription, Boolean adapterCreateContent, String compatibleAdapters, String shortName) {
        this.adapterName = adapterName;
        this.adapterDescription = adapterDescription;
        this.adapterCreateContent = adapterCreateContent;
        this.compatibleAdapters = compatibleAdapters;
        this.shortName = shortName;
    }
}
