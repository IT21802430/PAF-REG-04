package com.fitnessgram.fitnessgram.services;

import com.fitnessgram.fitnessgram.payloads.ProfileDto;

public interface ProfileService {
    ProfileDto getProfileDetails(Integer userId);
}
