package com.productcommunity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productcommunity.model.QuestionComments;
import com.productcommunity.repository.QuestionCommentRepository;

@Service
public class QuestionCommentService {
	@Autowired
	QuestionCommentRepository questionCommentRepository;
public boolean generateComment(QuestionComments comment) {
	questionCommentRepository.save(comment);
	return true;
}
}
