package com.backend.backend.controller;

import com.backend.backend.entity.Community;
import com.backend.backend.repository.CommunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/communities")
public class CommunityController {

    @Autowired
    private CommunityRepository communityRepository;

    @PostMapping("/create")
    public ResponseEntity<Community> createCommunity(@RequestBody Community community) {
        return ResponseEntity.ok(communityRepository.save(community));
    }

    @GetMapping("/list")
    public List<Community> getAllCommunities() {
        return communityRepository.findAll();
    }
}
