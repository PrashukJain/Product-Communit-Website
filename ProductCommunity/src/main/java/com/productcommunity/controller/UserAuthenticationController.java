package com.productcommunity.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.productcommunity.model.User;
import com.productcommunity.service.UserAuthenticationService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UserAuthenticationController {
@Autowired
UserAuthenticationService userAuthenticationService;
@PostMapping("/authenticateUser")
public User getUser(@RequestBody User user) {
	return userAuthenticationService.getUser(user);
}

@GetMapping("/users")
public Long numberOfUser() {
	return userAuthenticationService.numberOfUser();
}

@PostMapping("/logout")
public void logout(@RequestHeader("token") String token) {
	userAuthenticationService.logout(token);
}
}
