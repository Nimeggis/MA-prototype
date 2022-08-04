package com.example.prototype.adapterservice.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "adapter")
@Entity
@Data
@NoArgsConstructor
public class AdapterModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int ID;

    @Column(name = "Name")
    private String adapterName;

    @Column(name = "Description")
    private String adapterDescription;

    @Column(name = "create_content")
    private Boolean adapterCreateContent;

    @Column(name = "compatible_adapter")
    private String compatibleAdapters;

    @Column(name = "short_name")
    private String shortName;

    public AdapterModel(String adapterName, String adapterDescription, Boolean adapterCreateContent, String compatibleAdapters, String shortName) {
        this.adapterName = adapterName;
        this.adapterDescription = adapterDescription;
        this.adapterCreateContent = adapterCreateContent;
        this.compatibleAdapters = compatibleAdapters;
        this.shortName = shortName;
    }
}
