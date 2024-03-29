package com.cognizant.movie.bean;

import java.util.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

//import antlr.collections.List;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "us_id")
	private Integer id;
	@Column(name = "us_first_name")
	private String firstName;
	@Column(name = "us_last_name")
	private String lastName;
	@Column(name = "us_user_name")
	private String userName;

	@Column(name = "us_password")
	private String password;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "ur_us_id"), inverseJoinColumns = @JoinColumn(name = "ur_ro_id"))
	private Set<Role> roleList;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "favorite", joinColumns = @JoinColumn(name = "ft_us_id"), inverseJoinColumns = @JoinColumn(name = "ft_mo_id"))
	private List<MovieDetails> movieDetailsList;
	
	public User(Integer id, String firstName, String lastName, String userName, String password, Set<Role> roleList,
			List<MovieDetails> movieDetailsList) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.password = password;
		this.roleList = roleList;
		this.movieDetailsList = movieDetailsList;
	}



		public User() {
		super();
		// TODO Auto-generated constructor stub
	}

		public User(Integer id, String userName, String password, Set<Role> roleList, List<MovieDetails> movieDetailsList) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.roleList = roleList;
		this.movieDetailsList = movieDetailsList;
	}



		public Integer getId() {
			return id;
		}



		public void setId(Integer id) {
			this.id = id;
		}



		public String getFirstName() {
			return firstName;
		}



		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}



		public String getLastName() {
			return lastName;
		}



		public void setLastName(String lastName) {
			this.lastName = lastName;
		}



		public String getUserName() {
			return userName;
		}



		public void setUserName(String userName) {
			this.userName = userName;
		}



		public String getPassword() {
			return password;
		}



		public void setPassword(String password) {
			this.password = password;
		}



		public Set<Role> getRoleList() {
			return roleList;
		}



		public void setRoleList(Set<Role> roleList) {
			this.roleList = roleList;
		}



		public List<MovieDetails> getMovieDetailsList() {
			return movieDetailsList;
		}



		public void setMovieDetailsList(List<MovieDetails> movieDetailsList) {
			this.movieDetailsList = movieDetailsList;
		}



		@Override
		public String toString() {
			return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", userName=" + userName
					+ ", password=" + password + ", roleList=" + roleList + ", movieDetailsList=" + movieDetailsList
					+ "]";
		}
		
		

	


}
