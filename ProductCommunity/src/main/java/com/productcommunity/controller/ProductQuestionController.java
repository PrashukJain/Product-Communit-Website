package com.productcommunity.controller;

import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import com.productcommunity.model.ProductQuestions;
import com.productcommunity.model.User;
import com.productcommunity.service.ProductQuestionService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductQuestionController {
	@Autowired
	private ProductQuestionService productQuestionService;
	@PostMapping("/addQuestion")
public boolean createQuestion(@RequestBody ProductQuestions question,@RequestHeader("token") String token) {
		User user=(User) RequestContextHolder.getRequestAttributes().getAttribute("user", RequestAttributes.SCOPE_REQUEST);
		question.setUser(user);
		question.setAuthor(user.getEmail());
		return this.productQuestionService.generateQuestion(question);
	}
	@GetMapping("/getAllQuestion")
public Set<ProductQuestions> getAllQuestion(@RequestHeader("token") String token){
		User user=(User) RequestContextHolder.getRequestAttributes().getAttribute("user", RequestAttributes.SCOPE_REQUEST);
		String email=user.getEmail();
		return productQuestionService.getQuestions(email);
	}
	@GetMapping("/getQuestion")
public ProductQuestions getQuestion(@RequestParam String id,@RequestHeader("token") String token) {
	long questionId=Long.parseLong(id);
	return productQuestionService.getQuestion(questionId);
}
	@GetMapping("/searchQuestion")
	public List<ProductQuestions> searchQuestion(@RequestParam("param") String param,@RequestHeader("token") String token){
		return productQuestionService.search(param);
	}
	@GetMapping("/questions")
	public long numberOfQuestion() {
		return productQuestionService.numberOfQuestion();
	}
}
