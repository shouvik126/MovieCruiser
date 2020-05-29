package com.cognizant.movie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.movie.bean.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
	public Role findByRoleId(int id);
}
