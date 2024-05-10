package com.fitnessgram.fitnessgram.entities;

import javax.persistence.*;
import lombok.Data;

@Entity
@Data
public class Role {
    
	@Id
	private int id;

	private String name;
}
