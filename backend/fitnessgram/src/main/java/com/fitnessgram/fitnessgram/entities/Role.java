package com.fitnessgram.fitnessgram.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Role {
    
	@Id
	private int id;

	private String name;
}
