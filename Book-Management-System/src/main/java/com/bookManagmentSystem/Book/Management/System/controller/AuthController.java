package com.bookManagmentSystem.Book.Management.System.controller;


import com.bookManagmentSystem.Book.Management.System.entity.User;
import com.bookManagmentSystem.Book.Management.System.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody User user){
        if(userRepository.findByUsername(user.getUsername()).isPresent()){
            return ResponseEntity.badRequest().body("Username is already taken");
        }
        user.setPassword((new BCryptPasswordEncoder().encode(user.getPassword())));
        user.setRole("USER");
        return ResponseEntity.ok(userRepository.save(user));
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody User user){
        Optional<User> existing = userRepository.findByUsername(user.getUsername());
        if (existing.isPresent() &&
             new BCryptPasswordEncoder().matches(user.getPassword(), existing.get().getPassword())){
            return ResponseEntity.ok("Login Success");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
    }
}
