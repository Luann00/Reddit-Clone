package com.backend.backend.service;

import com.backend.backend.entity.Post;
import com.backend.backend.entity.User;
import com.backend.backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    private final PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> getPostById(Long id) {
        return postRepository.findById(id);
    }

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    public Post updatePost(Long id, Post postDetails) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Post not found with id " + id));

        post.setTitle(postDetails.getTitle());
        post.setContent(postDetails.getContent());

        return postRepository.save(post);
    }
}