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
public class QuestionComments {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="comment_id")
	private long commentId;
	@Column(name="comment")
     private String comment;
	@Column(name="commented_by")
	private String commentedBy;
	@Column(name="body")
	@Lob
	private String body;
	@Column(name="date")
	private Date date;
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="question_id")
	private ProductQuestions question;
	@JsonManagedReference
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "comment")
	private Set<CommentsLike> like;
	public long getCommentId() {
		return commentId;
	}
	public void setCommentId(long commentId) {
		this.commentId = commentId;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getCommentedBy() {
		return commentedBy;
	}
	public void setCommentedBy(String commentedBy) {
		this.commentedBy = commentedBy;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public ProductQuestions getQuestion() {
		return question;
	}
	public void setQuestion(ProductQuestions question) {
		this.question = question;
	}
	public Set<CommentsLike> getLike() {
		return like;
	}
	public void setLike(Set<CommentsLike> like) {
		this.like = like;
	}
	
}
