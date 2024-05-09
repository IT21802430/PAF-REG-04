package com.fitnessgram.fitnessgram.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fitnessgram.fitnessgram.entities.Category;

public interface CategoryRepo extends JpaRepository<Category, Integer> {
    
}
