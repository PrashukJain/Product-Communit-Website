package com.productcommunity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.productcommunity.model.CommentsLike;
import com.productcommunity.service.CommentsLikeService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class CommentsLikeController {
	@Autowired
	private CommentsLikeService commentsLikeService;
	@PostMapping("/likeComment")
	public long commentLike(@RequestBody CommentsLike like,@RequestHeader("token") String token) {
return commentsLikeService.likeComment(like, token);
	}

}
