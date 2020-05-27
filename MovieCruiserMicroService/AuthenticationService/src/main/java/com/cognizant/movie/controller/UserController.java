package com.cognizant.movie.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.movie.bean.User;

@RestController
public class UserController {
	
	@GetMapping("users")
	public String signUp()//@RequestBody User user)
	{
		return "shouvik";
	}

}
