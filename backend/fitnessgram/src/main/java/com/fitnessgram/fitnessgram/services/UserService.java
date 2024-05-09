package com.fitnessgram.fitnessgram.services;

import java.util.List;

import com.fitnessgram.fitnessgram.payloads.UserDto;

public interface UserService {
    UserDto registerNewUser(UserDto user);

    UserDto createUser(UserDto user);

    UserDto updateUser(UserDto user, Integer userId);

    UserDto getUserById(Integer userId);

    List<UserDto> getAllUsers();

    void deleteUser(Integer userId);

    void saveFriendByUser(Integer userId, Integer friendId);

    UserDto findUserByEmail(String userEmail);
}
