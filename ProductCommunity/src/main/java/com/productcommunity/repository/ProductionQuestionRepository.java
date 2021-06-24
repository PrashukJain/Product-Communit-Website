package com.productcommunity.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.productcommunity.model.ProductQuestions;
@Repository
public interface ProductionQuestionRepository extends JpaRepository<ProductQuestions, Long>{
	@Query("SELECT u FROM ProductQuestions u WHERE u.question=:param or u.productCode=:param or u.author=:param or u.date=:param or u.question Like %:param% or u.productCode Like %:param% or u.author Like %:param% ")
public List<ProductQuestions> searchQuestion(String param);
	
	@Query("Select Count(*) From ProductQuestions")
	long questions();
}
