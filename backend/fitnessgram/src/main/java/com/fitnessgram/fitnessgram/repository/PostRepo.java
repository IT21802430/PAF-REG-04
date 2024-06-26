package com.fitnessgram.fitnessgram.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fitnessgram.fitnessgram.entities.Category;
import com.fitnessgram.fitnessgram.entities.Post;
import com.fitnessgram.fitnessgram.entities.User;

public interface PostRepo extends JpaRepository<Post, Integer> {
    
	List<Post> findByUser(User user);

	List<Post> findByCategory(Category category);

	@Query("select p from Post p where p.title like :key")
	List<Post> searchByTitle(@Param("key") String title);

}
