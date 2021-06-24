package com.productcommunity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import com.productcommunity.model.QuestionComments;
import com.productcommunity.model.User;
import com.productcommunity.service.QuestionCommentService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class QuestionCommentController {
	@Autowired
	private QuestionCommentService questionCommentService;
	@PostMapping("/comment")
public boolean generateComments(@RequestBody QuestionComments comment,@RequestHeader("token") String token ) {
		User user=(User) RequestContextHolder.getRequestAttributes().getAttribute("user", RequestAttributes.SCOPE_REQUEST);
	comment.setCommentedBy(user.getEmail());
		return questionCommentService.generateComment(comment);
	}

}
