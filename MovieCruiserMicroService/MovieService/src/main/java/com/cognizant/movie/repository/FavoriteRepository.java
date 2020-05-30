package com.cognizant.movie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.movie.bean.Favorite;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Integer> {
	
	public void deleteByFavoriteMovieId(int id);

	@Query(value = "select  distinct(ft_mo_id) from favorite where ft_mo_id=?1 limit 1", nativeQuery = true)
	public Favorite findByFavoriteProductId(int id);
}
