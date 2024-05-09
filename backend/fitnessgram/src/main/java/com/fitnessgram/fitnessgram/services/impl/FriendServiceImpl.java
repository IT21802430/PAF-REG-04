package com.fitnessgram.fitnessgram.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.fitnessgram.fitnessgram.entities.User;
import com.fitnessgram.fitnessgram.exceptions.ResourceNotFoundException;
import com.fitnessgram.fitnessgram.repository.UserRepo;
import com.fitnessgram.fitnessgram.services.FriendService;

public class FriendServiceImpl implements FriendService {
    @Autowired
    UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void addFriend(String userEmail, Integer friendId) {
        User user = this.userRepo.findByEmail(userEmail).get();
        User friend = this.userRepo.findById(friendId)
                .orElseThrow(() -> new ResourceNotFoundException("Friend", "friendId id", friendId));
        user.getFriends().add(friend);
        userRepo.save(user);
    }
}
