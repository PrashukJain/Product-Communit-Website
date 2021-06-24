package com.productcommunity.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class CommentsLike {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private long LikeId;
	@Column(name="likeCommentId")
	private long likeCommentId;
	private String email;
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="commentId")
	private QuestionComments comment;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public QuestionComments getComment() {
		return comment;
	}
	public void setComment(QuestionComments comment) {
		this.comment = comment;
	}
	public long getLikeId() {
		return LikeId;
	}
	public void setLikeId(long likeId) {
		LikeId = likeId;
	}
	public long getLikeCommentId() {
		return likeCommentId;
	}
	public void setLikeCommentId(long likeCommentId) {
		this.likeCommentId = likeCommentId;
	}
}
