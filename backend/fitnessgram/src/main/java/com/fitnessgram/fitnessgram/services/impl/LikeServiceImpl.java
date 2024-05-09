package com.fitnessgram.fitnessgram.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.fitnessgram.fitnessgram.entities.Like;
import com.fitnessgram.fitnessgram.entities.Post;
import com.fitnessgram.fitnessgram.entities.User;
import com.fitnessgram.fitnessgram.exceptions.ResourceNotFoundException;
import com.fitnessgram.fitnessgram.payloads.LikeDto;
import com.fitnessgram.fitnessgram.repository.LikeRepo;
import com.fitnessgram.fitnessgram.repository.PostRepo;
import com.fitnessgram.fitnessgram.repository.UserRepo;
import com.fitnessgram.fitnessgram.services.LikeService;

public class LikeServiceImpl implements LikeService {
    @Autowired
	private PostRepo postRepo;

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private LikeRepo likeRepo;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public LikeDto createLike(LikeDto likeDto, Integer postId, Integer userId) {

		Post post = this.postRepo.findById(postId)
				.orElseThrow(() -> new ResourceNotFoundException("Post", "post id ", postId));

		User user = this.userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", "user id ", userId));

		Like like = this.modelMapper.map(likeDto, Like.class);

		like.setPost(post);
		like.setUser(user);

		Like saveLike = this.likeRepo.save(like);

		return this.modelMapper.map(saveLike, LikeDto.class);
	}

	@Override
	public void deleteLike(Integer likeId) {

		Like like = this.likeRepo.findById(likeId)
				.orElseThrow(() -> new ResourceNotFoundException("Like", "LikeId", likeId));
		this.likeRepo.delete(like);
	}

	@Override
	public LikeDto createLike(LikeDto likeDto, Integer postId, String userEmail) {
		Post post = this.postRepo.findById(postId)
				.orElseThrow(() -> new ResourceNotFoundException("Post", "post id ", postId));

		User user = this.userRepo.findByEmail(userEmail).get();

		Like like = this.modelMapper.map(likeDto, Like.class);

		like.setPost(post);
		like.setUser(user);

		Like saveLike = this.likeRepo.save(like);

		return this.modelMapper.map(saveLike, LikeDto.class);
	}
}
