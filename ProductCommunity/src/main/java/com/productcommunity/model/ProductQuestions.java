package com.productcommunity.model;


import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
@Entity
public class ProductQuestions {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column(name="question_id")
private long questionId;
@Column(name="question")
private String question;
@Column(name="author")
private String author;
@Column(name="body")
@Lob
private String body;
@Column(name="date")
private Date date;
@Column(name="product_code")
private String productCode;
@Column(name="like_count")
private long likeCount;
@JsonManagedReference
@OneToMany(cascade = CascadeType.ALL,mappedBy = "question")
private Set<QuestionComments> comments;
@JsonBackReference
@ManyToOne
@JoinColumn(name="email")
private User user;
public long getQuestionId() {
	return questionId;
}
public void setQuestionId(long questionId) {
	this.questionId = questionId;
}
public String getQuestion() {
	return question;
}
public void setQuestion(String question) {
	this.question = question;
}


public String getProductCode() {
	return productCode;
}
public void setProductCode(String productCode) {
	this.productCode = productCode;
}

public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}
@Override
public String toString() {
	return "ProductQuestions [questionId=" + questionId + ", question=" + question + ", date=" + date + ", productCode="
			+ productCode + "]";
}
public String getBody() {
	return body;
}
public void setBody(String body) {
	this.body = body;
}
public String getAuthor() {
	return author;
}
public void setAuthor(String author) {
	this.author = author;
}
public Date getDate() {
	return date;
}
public void setDate(Date date) {
	this.date = date;
}
public long getLikeCount() {
	return likeCount;
}
public void setLikeCount(long likeCount) {
	this.likeCount = likeCount;
}
public Set<QuestionComments> getComments() {
	return comments;
}
public void setComments(Set<QuestionComments> comments) {
	this.comments = comments;
}


}
