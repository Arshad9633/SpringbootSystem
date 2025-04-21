package com.bookManagmentSystem.Book.Management.System.service;

import com.bookManagmentSystem.Book.Management.System.entity.Book;
import com.bookManagmentSystem.Book.Management.System.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public void save(Book book) {
        bookRepository.save(book);
    }

    public List<Book> getAllBook() {
        return bookRepository.findAll();
    }

    public Book getBookById(String id) {
        return bookRepository.findById(id).orElse(null);
    }

    public void delete(String id) {
        bookRepository.deleteById(id);
    }
}
