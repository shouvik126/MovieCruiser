package com.cognizant.movie.bean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "movie_details")
public class MovieDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "movie_id")
	private Integer id;
	@Column(name = "movie_title")
	private String title;

	@Column(name = "movie_box_office")
    private Float boxOffice;
 

	@Column(name = "movie_active")
	private boolean isActive;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Kolkata")
	@Column(name = "movie_date_of_launch")
	private Date dateOfLaunch;

	@Column(name = "movie_genre")
	private String genre;

	@Column(name = "movie_has_teaser")
	private boolean hasTeaser;
	

	@Column(name = "movie_image")
	private String url;
	
	public MovieDetails(Integer id, String title, Float boxOffice, boolean isActive, Date dateOfLaunch, String genre,
			boolean hasTeaser, String url) {
		super();
		this.id = id;
		this.title = title;
		this.boxOffice = boxOffice;
		this.isActive = isActive;
		this.dateOfLaunch = dateOfLaunch;
		this.genre = genre;
		this.hasTeaser = hasTeaser;
		this.url = url;
	}

	public MovieDetails() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Float getBoxOffice() {
		return boxOffice;
	}

	public void setBoxOffice(Float boxOffice) {
		this.boxOffice = boxOffice;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public Date getDateOfLaunch() {
		return dateOfLaunch;
	}

	public void setDateOfLaunch(Date dateOfLaunch) {
		this.dateOfLaunch = dateOfLaunch;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public boolean isHasTeaser() {
		return hasTeaser;
	}

	public void setHasTeaser(boolean hasTeaser) {
		this.hasTeaser = hasTeaser;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "MovieDetails [id=" + id + ", title=" + title + ", boxOffice=" + boxOffice + ", isActive=" + isActive
				+ ", dateOfLaunch=" + dateOfLaunch + ", genre=" + genre + ", hasTeaser=" + hasTeaser + ", url=" + url
				+ "]";
	}
	
	


	

}
