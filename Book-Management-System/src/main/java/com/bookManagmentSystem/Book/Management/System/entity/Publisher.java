package com.bookManagmentSystem.Book.Management.System.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "publishers")
public class Publisher {

    @Id
    private String id;

    private String name;
    private String address;

    public void setId(String id) {
        this.id = id;
    }
}
