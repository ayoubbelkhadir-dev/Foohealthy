package com.foohealty.healty_food_project.repository;

import com.foohealty.healty_food_project.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food,Long> {
}
