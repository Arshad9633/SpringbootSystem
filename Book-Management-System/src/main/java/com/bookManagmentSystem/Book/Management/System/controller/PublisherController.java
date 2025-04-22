package com.bookManagmentSystem.Book.Management.System.controller;

import com.bookManagmentSystem.Book.Management.System.entity.Publisher;
import com.bookManagmentSystem.Book.Management.System.service.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/publishers")
@CrossOrigin(origins = "*")
public class PublisherController {

    @Autowired
    private PublisherService publisherService;

    @GetMapping
    public List<Publisher> getAllPublishers() {
        return publisherService.getAllPublishers();
    }

    @PostMapping
    public void savePublisher(@RequestBody Publisher publisher) {
        publisherService.save(publisher);
    }

    @GetMapping("/{id}")
    public Publisher getPublisherById(@PathVariable String id) {
        return publisherService.getPublisherById(id);
    }

    @PutMapping("/{id}")
    public void updatePublisher(@PathVariable String id, @RequestBody Publisher publisher) {
        publisher.setId(id);
        publisherService.save(publisher);
    }

    @DeleteMapping("/{id}")
    public void deletePublisher(@PathVariable String id) {
        publisherService.delete(id);
    }
}
