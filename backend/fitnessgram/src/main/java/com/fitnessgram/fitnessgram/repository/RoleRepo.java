package com.fitnessgram.fitnessgram.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fitnessgram.fitnessgram.entities.Role;

public interface RoleRepo extends JpaRepository<Role, Integer> {
    
}
