package com.backend.backend.controller;

import com.backend.backend.entity.User;
import com.backend.backend.dtos.LoginUserDto;
import com.backend.backend.dtos.RegisterUserDto;
import com.backend.backend.responses.LoginResponse;
import com.backend.backend.service.AuthenticationService;
import com.backend.backend.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/auth")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {
    private final JwtService jwtService;

    private final AuthenticationService authenticationService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUserDto registerUserDto) {
        User registeredUser = authenticationService.signup(registerUserDto);

        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDto loginUserDto) {
        User authenticatedUser = authenticationService.authenticate(loginUserDto);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponse loginResponse = new LoginResponse().setToken(jwtToken).setExpiresIn(jwtService.getExpirationTime());

        return ResponseEntity.ok(loginResponse);
    }
}

