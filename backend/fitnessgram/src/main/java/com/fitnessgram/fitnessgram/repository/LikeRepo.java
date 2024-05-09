package com.fitnessgram.fitnessgram.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fitnessgram.fitnessgram.entities.Like;

public interface LikeRepo extends JpaRepository<Like, Integer> {
    
}
