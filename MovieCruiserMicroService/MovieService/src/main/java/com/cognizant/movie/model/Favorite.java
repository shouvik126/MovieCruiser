package com.cognizant.movie.model;

import java.util.List;

import com.cognizant.movie.bean.MovieDetails;

public class Favorite {

	private List<MovieDetails> movieDetailsList;
	private double total;
	public Favorite() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Favorite(List<MovieDetails> movieDetailsList, double total) {
		super();
		this.movieDetailsList = movieDetailsList;
		this.total = total;
	}
	public List<MovieDetails> getMovieDetailsList() {
		return movieDetailsList;
	}
	public void setMovieDetailsList(List<MovieDetails> movieDetailsList) {
		this.movieDetailsList = movieDetailsList;
	}
	public double getTotal() {
		return total;
	}
	public void setTotal(double total) {
		this.total = total;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((movieDetailsList == null) ? 0 : movieDetailsList.hashCode());
		long temp;
		temp = Double.doubleToLongBits(total);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Favorite other = (Favorite) obj;
		if (movieDetailsList == null) {
			if (other.movieDetailsList != null)
				return false;
		} else if (!movieDetailsList.equals(other.movieDetailsList))
			return false;
		if (Double.doubleToLongBits(total) != Double.doubleToLongBits(other.total))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Favorite [movieDetailsList=" + movieDetailsList + ", total=" + total + "]";
	}
	
}
