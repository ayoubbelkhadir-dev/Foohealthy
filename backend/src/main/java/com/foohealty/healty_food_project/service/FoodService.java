package com.foohealty.healty_food_project.service;

import com.foohealty.healty_food_project.model.Food;
import com.foohealty.healty_food_project.model.User;

import java.util.List;

public interface FoodService {
    public Food creatFood(Food food, User user);
    public Food findFoodById(Long id) throws Exception;
    public void deleteFood(Long id) throws Exception;
    public Food updateFood(Food food,Long id) throws Exception;
    public List<Food> findAllFood();
    public Food likeFood(Long foodId,User user) throws Exception;

}
