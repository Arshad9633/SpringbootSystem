package com.bookManagmentSystem.Book.Management.System.controller;

import com.bookManagmentSystem.Book.Management.System.entity.Book;
import com.bookManagmentSystem.Book.Management.System.service.BookService;
import com.bookManagmentSystem.Book.Management.System.service.GenreService;
import com.bookManagmentSystem.Book.Management.System.service.PublisherService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "*") // Allow frontend access
public class BookController {

    @Autowired
    private BookService bookService;

    @Autowired
    private GenreService genreService;

    @Autowired
    private PublisherService publisherService;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBook();
    }

    @PostMapping
    public void addBook(@RequestBody Book book) {
        bookService.save(book);
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable String id) {
        return bookService.getBookById(id);
    }

    @PutMapping("/{id}")
    public void updateBook(@PathVariable String id, @RequestBody @NotNull Book book) {
        book.setId(id);
        bookService.save(book);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable String id) {
        bookService.delete(id);
    }
}
