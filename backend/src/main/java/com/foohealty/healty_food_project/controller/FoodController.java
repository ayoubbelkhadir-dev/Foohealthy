package com.foohealty.healty_food_project.controller;

import com.foohealty.healty_food_project.model.Food;
import com.foohealty.healty_food_project.model.User;
import com.foohealty.healty_food_project.service.FoodService;
import com.foohealty.healty_food_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/foods")
public class FoodController {
    @Autowired
    private FoodService foodService;
    @Autowired
    private UserService userService;

    @PostMapping()
    public Food creatFood(@RequestBody Food food, @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwt(jwt);
        return foodService.creatFood(food,user);
    }

    @PutMapping("/{foodId}")
    public Food updateFood(@RequestBody Food food, @PathVariable Long foodId) throws Exception {
        return foodService.updateFood(food,foodId);
    }

    @GetMapping()
    public List<Food> getAllFood(){
        return foodService.findAllFood();
    }

    @DeleteMapping("/{foodId}")
    public  String deleteFood(@PathVariable Long foodId) throws Exception {
        foodService.deleteFood(foodId);
        return "Food deleted successfully";
    }

    @PutMapping("/{foodId}/like")
    public Food getLikes(@PathVariable Long foodId, @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwt(jwt);
        return foodService.likeFood(foodId,user);
    }

}
