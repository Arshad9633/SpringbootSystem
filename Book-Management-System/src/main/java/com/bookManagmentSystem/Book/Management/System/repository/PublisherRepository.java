package com.bookManagmentSystem.Book.Management.System.repository;

import com.bookManagmentSystem.Book.Management.System.entity.Publisher;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublisherRepository extends MongoRepository<Publisher, String> {
}
