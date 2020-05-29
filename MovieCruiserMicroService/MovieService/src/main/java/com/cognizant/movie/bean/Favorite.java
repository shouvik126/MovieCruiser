package com.cognizant.movie.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="favorite")
public class Favorite {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ft_id")
	private Integer favoriteId;

	@Column(name = "ft_us_id")
	private Integer favoriteUserId;

	@Column(name = "ft_mo_id")
	private Integer favoriteMovieId;

	public Favorite(Integer favoriteId, Integer favoriteUserId, Integer favoriteMovieId) {
		super();
		this.favoriteId = favoriteId;
		this.favoriteUserId = favoriteUserId;
		this.favoriteMovieId = favoriteMovieId;
	}

	public Favorite() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Integer getFavoriteId() {
		return favoriteId;
	}

	public void setFavoriteId(Integer favoriteId) {
		this.favoriteId = favoriteId;
	}

	public Integer getFavoriteUserId() {
		return favoriteUserId;
	}

	public void setFavoriteUserId(Integer favoriteUserId) {
		this.favoriteUserId = favoriteUserId;
	}

	public Integer getFavoriteMovieId() {
		return favoriteMovieId;
	}

	public void setFavoriteMovieId(Integer favoriteMovieId) {
		this.favoriteMovieId = favoriteMovieId;
	}

	@Override
	public String toString() {
		return "Favorite [favoriteId=" + favoriteId + ", favoriteUserId=" + favoriteUserId + ", favoriteMovieId="
				+ favoriteMovieId + "]";
	}
	
	

}
