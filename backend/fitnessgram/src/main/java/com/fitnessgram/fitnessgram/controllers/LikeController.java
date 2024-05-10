package com.fitnessgram.fitnessgram.controllers;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fitnessgram.fitnessgram.payloads.ApiResponse;
import com.fitnessgram.fitnessgram.payloads.LikeDto;
import com.fitnessgram.fitnessgram.services.LikeService;

@RestController
@RequestMapping("/api/v1/")
public class LikeController {
    
	@Autowired
	private LikeService likeService;

	@GetMapping("/post/{postId}/like")
	public ResponseEntity<LikeDto> createLike(@RequestBody LikeDto like,
			@PathVariable Integer postId,
			Principal principal) {

		LikeDto createLike = this.likeService.createLike(like, postId, principal.getName());
		return new ResponseEntity<LikeDto>(createLike, HttpStatus.CREATED);
	}

	@PostMapping("/post/{postId}/user/{userId}/like")
	public ResponseEntity<LikeDto> createLike(@RequestBody LikeDto like,
			@PathVariable Integer postId,
			@PathVariable Integer userId) {

		LikeDto createLike = this.likeService.createLike(like, postId, userId);
		return new ResponseEntity<LikeDto>(createLike, HttpStatus.CREATED);
	}

	@DeleteMapping("/likes/{likeId}")
	public ResponseEntity<ApiResponse> deleteLike(@PathVariable Integer likeId) {

		this.likeService.deleteLike(likeId);

		return new ResponseEntity<ApiResponse>(new ApiResponse("Like deleted successfully !!", true), HttpStatus.OK);
	}
}
