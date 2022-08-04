package com.example.prototype.businesslogicservice.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "message")
@Entity
@Data
@NoArgsConstructor
public class BusinessModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "message")
    private String message;

    public BusinessModel(String message) {
        this.message = message;
    }
}
