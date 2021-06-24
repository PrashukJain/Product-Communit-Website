package com.productcommunity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.productcommunity.model.User;
import com.productcommunity.service.UserRegistrationService;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class UserRegistrationController {
	@Autowired
private UserRegistrationService userRegistrationService;
	@PostMapping("/createUser")
	public boolean createUser(@RequestBody User user) {
		return userRegistrationService.createUser(user);
	}

	
}
