package com.cognizant.movie.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.cognizant.movie.bean.MovieDetails;
import com.cognizant.movie.controller.MovieDetailsController;
import com.cognizant.movie.repository.MovieDetailsRepository;

@Service
public class MovieDetailsService {
	private static final Logger LOGGER = LoggerFactory.getLogger(MovieDetailsController.class);

	@Autowired
	public MovieDetailsRepository movieDetailsRepository;

	public List<MovieDetails> getMovieDetailsListCustomer() {
		LOGGER.info("SERVICE WORKS");
		LOGGER.info("data is" + movieDetailsRepository.getMovieDetails());
		return movieDetailsRepository.getMovieDetails();
	}

	public List<MovieDetails> getMovieDetailsListAdmin() {

		LOGGER.info("data is" + movieDetailsRepository.findAll());
		return movieDetailsRepository.findAll();
	}

	public MovieDetails getMovieDetails(long movieDetailsId) {
		
		int movieId = (int) movieDetailsId;

		return movieDetailsRepository.findById(movieId).get();

	}
	
	public MovieDetails deleteMovieDetails(long movieDetailsId)
	{
		int movieId = (int) movieDetailsId;
		
		MovieDetails movieDetails = movieDetailsRepository.findById(movieId).get();
		if(movieDetails == null)
		{
			return null;
		}
		else
		{
			movieDetailsRepository.delete(movieDetails);
			return movieDetails;
		}
		
	}

	public void modifyMovieDetails(MovieDetails movieDetails) {
//		
		LOGGER.info("Start:{}",movieDetails);
        MovieDetails m=movieDetailsRepository.findById(movieDetails.getId()).get();
        m.setTitle(movieDetails.getTitle());
        m.setBoxOffice(movieDetails.getBoxOffice());
        m.setActive(movieDetails.isActive());
        System.out.println("Date is "+movieDetails.getDateOfLaunch());
        m.setDateOfLaunch(movieDetails.getDateOfLaunch());
        m.setGenre(movieDetails.getGenre());
        m.setHasTeaser(movieDetails.isHasTeaser());
        LOGGER.info("End:{}",m);
		movieDetailsRepository.save(m);
	}
	
	

}
