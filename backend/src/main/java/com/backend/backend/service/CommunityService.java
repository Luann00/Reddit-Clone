package com.backend.backend.service;

import com.backend.backend.entity.Community;
import com.backend.backend.repository.CommunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommunityService {

    private final CommunityRepository communityRepository;

    @Autowired
    public CommunityService(CommunityRepository communityRepository) {
        this.communityRepository = communityRepository;
    }

    public List<Community> getAllCommunities() {
        return communityRepository.findAll();
    }

    public Optional<Community> getCommunityById(Long id) {
        return communityRepository.findById(id);
    }

    public Community createCommunity(Community community) {
        return communityRepository.save(community);
    }

    public void deleteCommunity(Long id) {
        communityRepository.deleteById(id);
    }

    public Community updateCommunity(Long id, Community communityDetails) {
        Community community = communityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Community not found with id " + id));

        community.setName(communityDetails.getName());
        community.setDescription(communityDetails.getDescription());

        return communityRepository.save(community);
    }
}