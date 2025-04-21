package com.bookManagmentSystem.Book.Management.System.repository;

import com.bookManagmentSystem.Book.Management.System.entity.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends MongoRepository<Book, String> {
}
