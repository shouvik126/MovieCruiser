package com.cognizant.movie.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.movie.bean.MovieDetails;
import com.cognizant.movie.security.AppUserDetailsService;
import com.cognizant.movie.service.MovieDetailsService;

@RestController
@RequestMapping("/movie-items")
@CrossOrigin("http://localhost:4200")
public class MovieDetailsController {
	private static final Logger LOGGER = LoggerFactory.getLogger(MovieDetailsController.class);
	
	@Autowired
	AppUserDetailsService appUserDetailsService;

	@Autowired
    private MovieDetailsService movieDetailsService;

	@GetMapping()
	public ArrayList<MovieDetails> getAllMovieDetails() {
		LOGGER.info("CONROLLER START");
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String user = authentication.getName();
		System.out.println(user);
		if (user.equals("anonymousUser")) {
			LOGGER.debug("da");
			return (ArrayList<MovieDetails>) movieDetailsService.getMovieDetailsListCustomer();

		} else {
			UserDetails userDetails = appUserDetailsService.loadUserByUsername(user);
			String role = userDetails.getAuthorities().toArray()[0].toString();
			LOGGER.info(role);
			LOGGER.info("CONTROLLER WORKS");
			if (role.equalsIgnoreCase("Admin"))
				return (ArrayList<MovieDetails>) movieDetailsService.getMovieDetailsListAdmin();
			else
				return (ArrayList<MovieDetails>) movieDetailsService.getMovieDetailsListCustomer();
		}

	}
	
	@GetMapping("/{id}")
	public MovieDetails getMovieDetails(@PathVariable long id) {
		return movieDetailsService.getMovieDetails(id);
	}

	@PutMapping()
	public void modifyMovieDetails(@RequestBody MovieDetails movieDetails) throws ParseException {
		System.out.println("Controller date is"+new SimpleDateFormat("dd-MM-yyyy").format(movieDetails.getDateOfLaunch()));
		movieDetailsService.modifyMovieDetails(movieDetails);
	}
	
	@DeleteMapping(value = "/{id}")
    public ResponseEntity<Long> deletePost(@PathVariable long id) {

        MovieDetails movieDetails = movieDetailsService.deleteMovieDetails(id);

        if (movieDetails==null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
