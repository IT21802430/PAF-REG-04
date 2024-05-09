package com.fitnessgram.fitnessgram.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitnessgram.fitnessgram.entities.User;
import com.fitnessgram.fitnessgram.exceptions.ResourceNotFoundException;
import com.fitnessgram.fitnessgram.payloads.ProfileDto;
import com.fitnessgram.fitnessgram.repository.UserRepo;
import com.fitnessgram.fitnessgram.services.ProfileService;

@Service
public class ProfileServiceImpl implements ProfileService {
    @Autowired
    UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ProfileDto getProfileDetails(Integer userId) {
        User user = this.userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", " Id ", userId));
        return this.modelMapper.map(user, ProfileDto.class);
    }
}
