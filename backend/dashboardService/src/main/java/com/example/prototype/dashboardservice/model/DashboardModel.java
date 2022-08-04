package com.example.prototype.dashboardservice.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DashboardModel {
    private String ID;

    private Boolean dashBoolean;

    public DashboardModel(String ID, Boolean dashBoolean) {
        this.ID = ID;
        this.dashBoolean = dashBoolean;
    }
}

