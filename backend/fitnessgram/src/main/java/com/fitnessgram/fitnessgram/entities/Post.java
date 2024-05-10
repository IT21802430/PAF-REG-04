package com.fitnessgram.fitnessgram.entities;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "posts")
@Getter
@Setter
@NoArgsConstructor
public class Post {
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer postId;

	@Column(name = "post_title", length = 100, nullable = false)
	private String title;

	@Column(length = 1000000000)
	private String content;

	private String imageName;

	private Date addedDate;

	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;

	@ManyToOne
	private User user;

	@ManyToMany(mappedBy = "savedPosts")
	private Set<User> postsSavedByUsers = new HashSet<>();

	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
	private Set<Comment> comments = new HashSet<>();

	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
	private Set<Like> likes = new HashSet<>();
}
