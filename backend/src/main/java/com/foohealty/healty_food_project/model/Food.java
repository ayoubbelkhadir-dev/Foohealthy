package com.foohealty.healty_food_project.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
@Getter
@Setter
@Entity
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private boolean vegitarian;
    private LocalDateTime createdAt;
    private String image;
    @ManyToOne
    private User user;
    private List<Long> likeFood = new ArrayList<>();
}
