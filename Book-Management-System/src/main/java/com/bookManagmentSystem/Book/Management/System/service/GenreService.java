package com.bookManagmentSystem.Book.Management.System.service;

import com.bookManagmentSystem.Book.Management.System.entity.Genre;
import com.bookManagmentSystem.Book.Management.System.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenreService {

    @Autowired
    private GenreRepository genreRepository;

    public List<Genre> getAllGenres() {
        return genreRepository.findAll();
    }

    public Genre saveGenre(Genre genre) {
        return genreRepository.save(genre);
    }


    public Genre getGenreById(String id) {
        return genreRepository.findById(id).orElse(null);
    }

    public void deleteGenre(String id) {
        genreRepository.deleteById(id);
    }
}
