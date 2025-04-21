package com.bookManagmentSystem.Book.Management.System.service;

import com.bookManagmentSystem.Book.Management.System.entity.Publisher;
import com.bookManagmentSystem.Book.Management.System.repository.PublisherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublisherService {

    @Autowired
    private PublisherRepository publisherRepository;

    public List<Publisher> getAllPublishers() {
        return publisherRepository.findAll();
    }

    public void save(Publisher publisher) {
        publisherRepository.save(publisher);
    }

    public Publisher getPublisherById(String id) {
        return publisherRepository.findById(id).orElse(null);
    }

    public void delete(String id) {
        publisherRepository.deleteById(id);
    }
}
