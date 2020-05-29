package com.cognizant.movie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.movie.bean.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	User findByUserName(String userName);
	
	@Query(value = "SELECT SUM(m.movie_box_office) AS favorite_total FROM movie_details AS m INNER JOIN favorite AS f ON m.movie_id = f.ft_mo_id WHERE f.ft_us_id = ?", nativeQuery = true)
	Double getFavoriteTotal(int userId);
}
