package com.bookManagmentSystem.Book.Management.System.controller;

import com.bookManagmentSystem.Book.Management.System.entity.Genre;
import com.bookManagmentSystem.Book.Management.System.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/genres")
@CrossOrigin(origins = "*")
public class GenreController {

    @Autowired
    private GenreService genreService;

    @GetMapping
    public List<Genre> getAllGenres() {
        return genreService.getAllGenres();
    }

    @PostMapping
    public ResponseEntity<Genre> saveGenre(@RequestBody Genre genre) {
        Genre saved = genreService.saveGenre(genre);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{id}")
    public Genre getGenreById(@PathVariable String id) {
        return genreService.getGenreById(id);
    }

    @PutMapping("/{id}")
    public void updateGenre(@PathVariable String id, @RequestBody Genre genre) {
        genre.setId(id);
        genreService.saveGenre(genre);
    }

    @DeleteMapping("/{id}")
    public void deleteGenre(@PathVariable String id) {
        genreService.deleteGenre(id);
    }
}
