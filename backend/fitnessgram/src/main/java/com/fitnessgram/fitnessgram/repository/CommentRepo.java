package com.fitnessgram.fitnessgram.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fitnessgram.fitnessgram.entities.Comment;

public interface CommentRepo extends JpaRepository<Comment, Integer> {
    
}
