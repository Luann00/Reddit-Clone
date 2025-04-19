package com.backend.backend.controller;

import com.backend.backend.entity.Post;
import com.backend.backend.entity.User;
import com.backend.backend.repository.CommentRepository;
import com.backend.backend.repository.CommunityRepository;
import com.backend.backend.repository.PostRepository;
import com.backend.backend.repository.UserRepository;
import com.backend.backend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    private final PostService postService;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @Autowired
    private CommunityRepository communityRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CommentRepository commentRepository;

    @PostMapping("/createPost")
    public ResponseEntity<Post> createPost(@RequestBody Post post, Principal principal) {
        String email = principal.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        post.setUser(user);
        return ResponseEntity.ok(postRepository.save(post));
    }

    @GetMapping("/{postId}")
    public Post getPost(@PathVariable Long postId) {
        return postRepository.findById(postId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found"));
    }

    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }
}