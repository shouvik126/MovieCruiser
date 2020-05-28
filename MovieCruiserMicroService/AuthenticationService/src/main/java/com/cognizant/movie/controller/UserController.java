package com.cognizant.movie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.movie.bean.User;
import com.cognizant.movie.exception.UserAlreadyExistsException;
import com.cognizant.movie.security.AppUserDetailsService;

@RestController
public class UserController {
	
	@Autowired
	private AppUserDetailsService appUserDetailsService;

	@PostMapping("users")
	public void signUp(@RequestBody User user)
	{
		try {
			appUserDetailsService.signUp(user);
		} catch (UserAlreadyExistsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	@GetMapping("admin")
	public String signUp1()//(@RequestBody User user)
	{
		return "shouvik-admin";
	}
	@GetMapping("customer")
	public String signUp2()//(@RequestBody User user)
	{
		return "shouvik-customer";
	}
	
	@GetMapping("users")
	public String signUp3()//(@RequestBody User user)
	{
		return "shouvik";
	}
}
