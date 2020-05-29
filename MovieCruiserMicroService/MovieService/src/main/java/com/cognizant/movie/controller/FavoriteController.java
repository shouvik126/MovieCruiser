package com.cognizant.movie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.movie.model.Favorite;
import com.cognizant.movie.service.FavoriteService;

@RestController
@RequestMapping("/favorite-items")
public class FavoriteController {
	@Autowired
	public FavoriteService favoriteService;
	
	@PostMapping("/{userId}/{movieDetailsId}")
	public void addFavoriteItem(@PathVariable String userId, @PathVariable long movieDetailsId) {
		favoriteService.addFavoriteItem(userId, movieDetailsId);
	}

	@GetMapping("/{userId}")
	public Favorite getAllFvoriteItems(@PathVariable String userId){
		return favoriteService.getAllFavoriteItems(userId);
	}

	@DeleteMapping("/{userId}/{movieDetailsId}")
	public void deleteFavoriteItems(@PathVariable String userId, @PathVariable long movieDetailsId) {
		favoriteService.deleteFavoriteItems(userId, movieDetailsId);
	}
}
