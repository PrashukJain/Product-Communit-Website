package com.productcommunity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.productcommunity.model.CommentsLike;
import com.productcommunity.model.User;
@Repository
public interface CommentsLikeRepository extends JpaRepository<CommentsLike, Long> {
	@Query(value="Select u.likeId From CommentsLike u Where u.commentId=?1 and u.email=?2",nativeQuery = true)
	String getCommentsLike(long commentID,String email);
}
