package com.productcommunity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.productcommunity.model.QuestionComments;
@Repository
public interface QuestionCommentRepository extends JpaRepository<QuestionComments, Long> {

}
