package com.bookManagmentSystem.Book.Management.System.repository;


import com.bookManagmentSystem.Book.Management.System.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User,String> {

    Optional<User> findByUsername(String username);
}
