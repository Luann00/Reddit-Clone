package com.backend.backend.controller;

import com.backend.backend.entity.Post;
import com.backend.backend.entity.User;
import com.backend.backend.entity.Vote;
import com.backend.backend.repository.PostRepository;
import com.backend.backend.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@RequestMapping("/api/votes")
public class VoteController {

    @Autowired
    private VoteRepository voteRepository;

    @Autowired
    private PostRepository postRepository;

    @PostMapping("/vote/{postId}")
    public ResponseEntity<String> votePost(@PathVariable Long postId, @RequestParam int vote, @RequestBody User user) {
        Post post = postRepository.findById(postId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found"));
        Optional<Vote> existingVote = voteRepository.findByUserAndPost(user, post);
        if (existingVote.isPresent()) {
            return ResponseEntity.badRequest().body("User has arleady voted on this post.");
        }
        Vote newVote = new Vote();
        newVote.setPost(post);
        newVote.setUser(user);
        newVote.setVote(vote);
        voteRepository.save(newVote);
        return ResponseEntity.ok("Vote registered.");
    }
}