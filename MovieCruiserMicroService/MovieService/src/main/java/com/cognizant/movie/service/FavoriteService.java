package com.cognizant.movie.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.cognizant.movie.bean.Favorite;
import com.cognizant.movie.bean.MovieDetails;
import com.cognizant.movie.bean.User;
import com.cognizant.movie.model.Favorite;
import com.cognizant.movie.repository.MovieDetailsRepository;
import com.cognizant.movie.repository.UserRepository;

@Service
public class FavoriteService {
	private static final Logger LOGGER = LoggerFactory.getLogger(FavoriteService.class);


	@Autowired
	MovieDetailsRepository movieDetailsRepository;

	@Autowired
	UserRepository userRepository;
	
	public void addFavoriteItem(String userId, long movieDetailsId) {
		// cartDao.addCartItem(userId, bookDetailsId);

		User user = userRepository.findByUserName(userId);

		MovieDetails movieDetails = movieDetailsRepository.findById((int) movieDetailsId).get();
		if (movieDetails != null) {
			List<MovieDetails> a = new ArrayList<MovieDetails>();
			a = user.getMovieDetailsList();
			a.add(movieDetails);
			user.setMovieDetailsList(a);
			userRepository.save(user);

		}

	}
	
	public Favorite getAllFavoriteItems(String userId) {



		Favorite favorite = new Favorite();

		User user = userRepository.findByUserName(userId);
		

		LOGGER.info("favorite is " + user.getMovieDetailsList());

		favorite.setMovieDetailsList(user.getMovieDetailsList());

		LOGGER.info("cart1 is " + favorite.getMovieDetailsList());

		try {
			favorite.setTotal(userRepository.getFavoriteTotal(user.getId()));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return favorite;

	}

	public void deleteFavoriteItems(String userId, long movieDetailsId) {

		User user = userRepository.findByUserName(userId);

		LOGGER.info("delete cart is " + user);

		MovieDetails movieDetails = movieDetailsRepository.findById((int) movieDetailsId).get();

		LOGGER.info("delete cart1 is " + movieDetails);

		List<MovieDetails> a = user.getMovieDetailsList();
		a.remove(movieDetails);
		user.setMovieDetailsList(a);
		userRepository.save(user);

	}


}
