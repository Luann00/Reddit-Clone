package com.backend.backend.repository;

import com.backend.backend.entity.Post;
import com.backend.backend.entity.User;
import com.backend.backend.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findByUserAndPost(User user, Post post);
}
