package com.fitnessgram.fitnessgram.controllers;

import java.security.Principal;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fitnessgram.fitnessgram.entities.User;
import com.fitnessgram.fitnessgram.exceptions.ApiException;
import com.fitnessgram.fitnessgram.payloads.JwtAuthRequest;
import com.fitnessgram.fitnessgram.payloads.JwtAuthResponse;
import com.fitnessgram.fitnessgram.payloads.UserDto;
import com.fitnessgram.fitnessgram.security.JwtTokenHelper;
import com.fitnessgram.fitnessgram.services.UserService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/auth/")
public class AuthController {
    
	@Autowired
	private JwtTokenHelper jwtTokenHelper;

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserService userService;

	@Autowired
	private ModelMapper mapper;

	@PostMapping("/login")
	public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request) throws Exception {
		this.authenticate(request.getUsername(), request.getPassword());
		UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());
		String token = this.jwtTokenHelper.generateToken(userDetails);

		JwtAuthResponse response = new JwtAuthResponse();
		response.setToken(token);
		response.setUser(this.mapper.map((User) userDetails, UserDto.class));
		return new ResponseEntity<JwtAuthResponse>(response, HttpStatus.OK);
	}

	// register new user api
	@PostMapping("/register")
	public ResponseEntity<UserDto> registerUser(@Valid @RequestBody UserDto userDto) {
		UserDto registeredUser = this.userService.registerNewUser(userDto);
		return new ResponseEntity<UserDto>(registeredUser, HttpStatus.CREATED);
	}



	@GetMapping ("/current")
	public ResponseEntity<UserDto> getUser(Principal principal) {
		UserDto user = this.userService.findUserByEmail(principal.getName());
		return new ResponseEntity<UserDto>(user, HttpStatus.OK);
	}

	private void authenticate(String username, String password) throws Exception {

		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username,
				password);
		try {
			this.authenticationManager.authenticate(authenticationToken);

		} catch (BadCredentialsException e) {
			System.out.println("Invalid Details !!");
			throw new ApiException("Invalid username or password !!");
		}

	}
}
