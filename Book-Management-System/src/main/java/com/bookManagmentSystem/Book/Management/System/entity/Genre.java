package com.bookManagmentSystem.Book.Management.System.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "genres")
public class Genre {

    @Id
    private String id;

    private String name;

    public void setId(String id) {
        this.id = id;
    }
}
