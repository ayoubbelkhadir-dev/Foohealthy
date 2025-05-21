package com.foohealty.healty_food_project.service;

import com.foohealty.healty_food_project.model.Food;
import com.foohealty.healty_food_project.model.User;
import com.foohealty.healty_food_project.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
@Service
public class FoodServiceImpl implements FoodService{
    @Autowired
    FoodRepository foodRepository;

    @Override
    public Food creatFood(Food food, User user) {
        Food newFood = new Food();
        newFood.setDescription(food.getDescription());
        newFood.setTitle(food.getTitle());
        newFood.setImage(food.getImage());
        newFood.setUser(user);
        newFood.setCreatedAt(LocalDateTime.now());

        return foodRepository.save(newFood);
    }

    @Override
    public Food findFoodById(Long id) throws Exception {
        if(foodRepository.findById(id).isPresent()){
            return foodRepository.findById(id).get();
        }
        throw  new Exception("Food not found with id  "+id);
    }

    @Override
    public void deleteFood(Long id) throws Exception {
        findFoodById(id);
        foodRepository.deleteById(id);

    }

    @Override
    public Food updateFood(Food food, Long id) throws Exception {
        Food oldFood = findFoodById(id);
        if(food.getTitle()!= null){
            oldFood.setTitle(food.getTitle());
        }
        if(food.getDescription()!= null){
            oldFood.setDescription(food.getDescription());
        }
        if(food.getImage()!= null){
            oldFood.setImage(food.getImage());
        }
        if(food.getTitle()!= null){
            oldFood.setTitle(food.getTitle());
        }

        return foodRepository.save(oldFood);
    }

    @Override
    public List<Food> findAllFood() {
        return foodRepository.findAll();
    }

    @Override
    public Food likeFood(Long foodId, User user) throws Exception {
        Food food = findFoodById(foodId);
        if(food.getLikeFood().contains(user.getId())){
            food.getLikeFood().remove(user.getId());
        }else{
            food.getLikeFood().add(user.getId());
        }
        return foodRepository.save(food);
    }
}
