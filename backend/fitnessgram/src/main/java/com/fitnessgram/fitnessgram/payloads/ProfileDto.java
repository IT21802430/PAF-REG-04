package com.fitnessgram.fitnessgram.payloads;

import java.util.HashSet;
import java.util.Set;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Getter
@Setter
public class ProfileDto {
    private int id;

    @NotEmpty
    @Size(min = 4, message = "Username must be min of 4 characters !!")
    private String name;

    @Email(message = "Email address is not valid !!")
    @NotEmpty(message = "Email is required !!")
    private String email;

    @NotEmpty
    @Size(min = 3, max = 10, message = "Password must be min of 3 chars and max of 10 chars !!")

    @NotEmpty
    private String about;

    private String imageLink;

    private Set<RoleDto> roles = new HashSet<>();

    private Set<ProfilePostDto> savedPosts = new HashSet<>();
    private Set<FriendDto> friends = new HashSet<>();
    private Set<FriendDto> friendOf = new HashSet<>();
}
