package com.foohealty.healty_food_project.controller;

import com.foohealty.healty_food_project.model.User;
import com.foohealty.healty_food_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

//    @PostMapping("/users")
//    public User createUser(@RequestBody User user) throws Exception {
//        return userService.createUser(user);
//    }
//    @DeleteMapping("/users/{userId}")
//    public String deleteUser(@PathVariable Long userId) throws Exception {
//         userService.deleteUser(userId);
//        return "User deleted successfully";
//    }
//    @GetMapping("/users")
//    public List<User> getUsers() throws Exception {
//        return userService.findAllUsers();
//    }

    @GetMapping("/api/users/profile")
    public User findUserByJwt(@RequestHeader("Authorization") String jwt) throws Exception {
        return userService.findUserByJwt(jwt);
    }


}
