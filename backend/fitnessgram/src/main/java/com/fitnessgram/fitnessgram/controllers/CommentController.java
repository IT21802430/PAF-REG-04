package com.fitnessgram.fitnessgram.controllers;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fitnessgram.fitnessgram.payloads.ApiResponse;
import com.fitnessgram.fitnessgram.payloads.CommentDto;
import com.fitnessgram.fitnessgram.services.CommentService;

@RestController
@RequestMapping("/api/v1/")
public class CommentController {
    
	@Autowired
	private CommentService commentService;

	@PostMapping("/post/{postId}/comments")
	public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto comment,
			@PathVariable Integer postId,
			Principal principal) {

		CommentDto createComment = this.commentService.createComment(comment, postId, principal.getName());
		return new ResponseEntity<CommentDto>(createComment, HttpStatus.CREATED);
	}

	@DeleteMapping("/comments/{commentId}")
	public ResponseEntity<ApiResponse> deleteComment(@PathVariable Integer commentId) {

		this.commentService.deleteComment(commentId);

		return new ResponseEntity<ApiResponse>(new ApiResponse("Comment deleted successfully !!", true), HttpStatus.OK);
	}
}
