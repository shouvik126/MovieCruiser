package com.cognizant.movie.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.movie.bean.MovieDetails;

@Repository
public interface MovieDetailsRepository extends JpaRepository<MovieDetails, Integer> {
	@Query(value = "select * from movie.movie_details where movie_active = '1' && movie_date_of_launch < \"2019-01-01\"", nativeQuery = true)
	List<MovieDetails> getMovieDetails();

	public Optional<MovieDetails> findById(int movieDetailsId);
}
