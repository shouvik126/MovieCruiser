package com.cognizant.movie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.movie.model.Favorite;
import com.cognizant.movie.security.AppUserDetailsService;
import com.cognizant.movie.service.FavoriteService;

@RestController
@RequestMapping("/favorite-items")
@CrossOrigin("http://localhost:4200")
public class FavoriteController {
	@Autowired
	public FavoriteService favoriteService;
	
	@Autowired
	AppUserDetailsService appUserDetailsService;
	
	@PostMapping("/{userId}/{movieDetailsId}")
	public void addFavoriteItem(@PathVariable String userId, @PathVariable long movieDetailsId) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String user = authentication.getName();
		UserDetails userDetails = appUserDetailsService.loadUserByUsername(user);
		favoriteService.addFavoriteItem(userId, movieDetailsId);
		//favoriteService.addFavoriteItem(userDetails., movieDetailsId);
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
