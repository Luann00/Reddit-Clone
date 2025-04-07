package com.backend.backend.controller;

import com.backend.backend.entity.Post;
import com.backend.backend.repository.CommentRepository;
import com.backend.backend.repository.CommunityRepository;
import com.backend.backend.repository.PostRepository;
import com.backend.backend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
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
    private CommentRepository commentRepository;

    @PostMapping("/createPost")
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
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