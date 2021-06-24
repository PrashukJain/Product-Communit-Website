package com.productcommunity.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productcommunity.model.ProductQuestions;
import com.productcommunity.model.User;
import com.productcommunity.repository.ProductionQuestionRepository;
import com.productcommunity.repository.UserRepository;

@Service
public class ProductQuestionService {
@Autowired
ProductionQuestionRepository productQuestionRepository;
@Autowired
UserRepository userRepository;

public boolean  generateQuestion(ProductQuestions questions) {
	
	productQuestionRepository.save(questions);
	return true;
}
public Set<ProductQuestions> getQuestions(String email){
	Optional<User> user= userRepository.findById(email);
	return user.get().getList();
}
public ProductQuestions getQuestion(long questionId) {
	Optional<ProductQuestions> question=productQuestionRepository.findById(questionId);
	return question.get();
}
public List<ProductQuestions> search(String param){
	return productQuestionRepository.searchQuestion(param);
}

public long numberOfQuestion() {
	return productQuestionRepository.questions();
}

}
