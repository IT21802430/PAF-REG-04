package com.fitnessgram.fitnessgram.services;

import com.fitnessgram.fitnessgram.payloads.CommentDto;

public interface CommentService {
    CommentDto createComment(CommentDto commentDto, Integer postId, Integer userId);

	void deleteComment(Integer commentId);

	CommentDto createComment(CommentDto commentDto, Integer postId, String userEmail);
}
