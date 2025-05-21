package com.foohealty.healty_food_project.service;

import com.foohealty.healty_food_project.config.JwtProvider;
import com.foohealty.healty_food_project.model.User;
import com.foohealty.healty_food_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User createUser(User user) throws Exception {
        if(userRepository.findByEmail(user.getEmail()) != null){
            throw new Exception("Email is already exist ");
        }
        return userRepository.save(user);    }

    @Override
    public String deleteUser(Long userId) throws Exception {
        userRepository.deleteById(userId);
        return "User deleted successfully";
    }

    @Override
    public List<User> findAllUsers() throws Exception {
        return userRepository.findAll();
    }

    @Override
    public User findUserById(Long id) throws Exception {
        if(userRepository.findById(id).isPresent()){
            return userRepository.findById(id).get();
        }
        throw new Exception("User not found with id ");
    }

    @Override
    public User findUserByJwt(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt);
        if(email == null){
            throw  new Exception("Provide valid jwt token...");
        }
        User user= userRepository.findByEmail(email);
        if(user == null){
            throw  new Exception("user not found with email  "+email);
        }
        return user;
    }
}
