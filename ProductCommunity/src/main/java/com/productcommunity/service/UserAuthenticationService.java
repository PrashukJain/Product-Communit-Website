package com.productcommunity.service;


import java.util.Optional;
import java.util.UUID;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.productcommunity.model.User;
import com.productcommunity.repository.UserRepository;

@Service
public class UserAuthenticationService {
	@Autowired
	private UserRepository userRepository;
	public User getUser(User user) {
		String email=user.getEmail();
		if(!userRepository.existsById(email)) {
			return null;
		}
		String password=user.getPassword();
		String encPassword=getEncPassword(password);
		Optional<User> databaseUser=userRepository.findById(email);
		if(databaseUser.get().getPassword().equals(encPassword)) {
			 String token = UUID.randomUUID().toString();
			 databaseUser.get().setToken(token);
			 userRepository.save(databaseUser.get());
			return databaseUser.get();
			}
		return null;	
	}

	public String getEncPassword(String password) {

	    try {
	        String encPass = DigestUtils.md5Hex(password);
	        return encPass;
	    } catch (Exception e) {
	        System.out.println(e);
	    }
	    return null;
	}
	public long numberOfUser() {
		return userRepository.users();
	}
	public void logout(String token) {
		String email=userRepository.getUserEmail(token);
		userRepository.removeToken(email);
	}
}
