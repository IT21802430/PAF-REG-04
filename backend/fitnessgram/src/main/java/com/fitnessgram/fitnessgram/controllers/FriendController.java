package com.fitnessgram.fitnessgram.controllers;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/")
public class FriendController {
    
    @Autowired
    private FriendService friendService;

    @GetMapping("friend/{friendId}/add")
    public ApiResponse saveFriendByUser(Principal principal, @PathVariable Integer friendId) {
        this.friendService.addFriend(principal.getName(), friendId);
        return new ApiResponse("Friend is Successfully Added !!", true);
    }
}
