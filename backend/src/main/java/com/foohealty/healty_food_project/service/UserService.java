package com.foohealty.healty_food_project.service;

import com.foohealty.healty_food_project.model.User;

import java.util.List;

public interface UserService {
    public User createUser(User user) throws Exception;
    public String deleteUser(Long userId) throws Exception;
    public List<User> findAllUsers() throws Exception ;
    public  User findUserById(Long id) throws Exception;
    public User findUserByJwt(String jwt) throws Exception;
}
