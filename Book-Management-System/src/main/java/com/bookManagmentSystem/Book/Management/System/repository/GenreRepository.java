package com.bookManagmentSystem.Book.Management.System.repository;

import com.bookManagmentSystem.Book.Management.System.entity.Genre;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenreRepository extends MongoRepository<Genre, String> {
}
