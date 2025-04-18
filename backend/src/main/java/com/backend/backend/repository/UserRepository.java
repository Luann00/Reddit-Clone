package com.backend.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.backend.entity.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByName(String username);
    Optional<User> findByEmail(String email);
}

