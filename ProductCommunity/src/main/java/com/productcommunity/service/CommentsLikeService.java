package com.productcommunity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productcommunity.model.CommentsLike;
import com.productcommunity.model.QuestionComments;
import com.productcommunity.model.User;
import com.productcommunity.repository.CommentsLikeRepository;
import com.productcommunity.repository.QuestionCommentRepository;
import com.productcommunity.repository.UserRepository;

@Service
public class CommentsLikeService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private CommentsLikeRepository commentsLikeRepository;
	@Autowired
	private QuestionCommentRepository questionCommentRepository;
public long likeComment(CommentsLike like,String token) {
	User user=userRepository.getUser(token);
	String email=user.getEmail();
	long commentId=like.getLikeCommentId();
	String likeId=commentsLikeRepository.getCommentsLike(commentId, email);
	if(likeId!=null) {
		
		commentsLikeRepository.deleteById(Long.parseLong(likeId));
	}
	else {
		
		like.setEmail(email);
		like.setComment(questionCommentRepository.findById(commentId).get());
		commentsLikeRepository.save(like);
	}
	QuestionComments comments=questionCommentRepository.findById(commentId).get();
	return comments.getLike().size();
}
}
