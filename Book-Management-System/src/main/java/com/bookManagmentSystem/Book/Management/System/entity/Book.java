package com.bookManagmentSystem.Book.Management.System.entity;

import lombok.Data;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "books")
public class Book {

    @Setter
    @Id
    private String id; // Use String for MongoDB ObjectId

    private String title;
    private String author;

    @DBRef
    private Genre genre;

    @DBRef
    private Publisher publisher;

    public void setId(String id) {
        this.id = id;
    }

}
