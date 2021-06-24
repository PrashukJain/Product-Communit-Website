package com.productcommunity.model;



import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class User {

	@Id
	@Column(name="email",unique=true,nullable=false)
	private String email;
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	@Column(name="password",nullable=false)
	private String password;
	@JsonManagedReference
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "user",fetch = FetchType.EAGER)
	private Set<ProductQuestions> list;
	@Column(name="token")
	private String token;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Set<ProductQuestions> getList() {
		return list;
	}
	public void setList(Set<ProductQuestions> list) {
		this.list = list;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	@Override
	public String toString() {
		return "User [email=" + email + ", firstName=" + firstName + ", lastName=" + lastName + ", password=" + password
				+ ", list=" + list + ", token=" + token + "]";
	}
	

}
