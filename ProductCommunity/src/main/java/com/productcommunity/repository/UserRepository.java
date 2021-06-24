package com.productcommunity.repository;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.productcommunity.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
	@Query(value="Select * From User u Where u.token=:token",nativeQuery = true)
	User getUser(String token);
	@Query(value="Select u.email From User u Where u.token=:token",nativeQuery = true)
	String getUserEmail(String token);
	@Query("Select Count(*) From User")
	long users();
	@Transactional
	@Modifying
	@Query(value="Update User u set u.token=NULL where u.email=:email",nativeQuery=true)
	void removeToken(String email);
}