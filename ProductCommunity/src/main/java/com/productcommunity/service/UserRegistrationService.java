package com.productcommunity.service;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.productcommunity.model.User;
import com.productcommunity.repository.UserRepository;

@Service
public class UserRegistrationService {
@Autowired
private UserRepository userRepository;
public boolean createUser(@RequestBody User user) {
	if(!userRepository.existsById(user.getEmail())) {
		String encPassword=getEncPassword(user.getPassword());
		user.setPassword(encPassword);
	this.userRepository.save(user);
	return true;
	}
	return false;
	
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

}
