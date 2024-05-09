package com.fitnessgram.fitnessgram.services;

import com.fitnessgram.fitnessgram.payloads.LikeDto;

public interface LikeService {
    LikeDto createLike(LikeDto likeDto, Integer postId, Integer userId);

	void deleteLike(Integer likeId);

	LikeDto createLike(LikeDto likeDto, Integer postId, String userEmail);
}
