package com.foohealty.healty_food_project.repository;

import com.foohealty.healty_food_project.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User,Long> {

    public User findByEmail(String email);
    public User findById(long id);
}
