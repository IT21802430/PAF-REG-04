export interface Post {
    id: number;
    userId: number;
    content: string;
    mediaLink: string;
    comments: Comment[];
}
  
export interface User {
    id: number;
    name: string;
    isVerified: boolean;
    username: string;
    avatarImg: string;
    bio: string; // New field for bio
    email: string; // New field for email
    password: string; // New field for password
    posts: Post[];
}
  
export interface SocialMediaData {
    users: User[];
}
  
export interface Comment {
    id: number;
    userId: number;
    postId: number;
    content: string;
}
  
  export const socialMediaData: SocialMediaData = {
    users: [
      {
        id: 1,
        name: "John",
        username: "john_doe",
        isVerified: false,
        avatarImg: "https://api.dicebear.com/8.x/identicon/svg",
        bio: "I'm a software engineer passionate about coding!",
        email: "john@example.com", // Dummy email
        password: "password123", // Dummy password
        posts: [
          {
            id: 1,
            userId: 1,
            content: "Hello world!",
            mediaLink: "https://example.com/image1.jpg",
            comments: [
              {
                id: 1,
                userId: 2,
                postId: 1,
                content: "Nice post!",
              },
              {
                id: 2,
                userId: 3,
                postId: 1,
                content: "Great photo!",
              },
            ],
          },
          {
            id: 2,
            userId: 1,
            content: "Check out this video!",
            mediaLink: "https://example.com/video1.mp4",
            comments: [
              {
                id: 3,
                userId: 4,
                postId: 2,
                content: "Awesome video!",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Jane",
        username: "jane9",
        isVerified: true,
        avatarImg: "https://api.dicebear.com/8.x/identicon/svg",
        bio: "I love photography and traveling!",
        email: "jane@example.com", // Dummy email
        password: "password123", // Dummy password
        posts: [
          {
            id: 3,
            userId: 2,
            content: "Amazing photo!",
            mediaLink: "https://example.com/image2.jpg",
            comments: [],
          },
        ],
      },
      {
        id: 3,
        name: "Alice",
        username: "alice_wonderland",
        isVerified: false,
        avatarImg: "https://api.dicebear.com/8.x/identicon/svg",
        bio: "Dreamer and adventurer!",
        email: "alice@example.com", // Dummy email
        password: "password123", // Dummy password
        posts: [
          {
            id: 4,
            userId: 3,
            content: "Just another day",
            mediaLink: "https://example.com/image3.jpg",
            comments: [],
          },
          {
            id: 5,
            userId: 3,
            content: "Feeling happy!",
            mediaLink: "https://example.com/image4.jpg",
            comments: [],
          },
        ],
      },
      {
        id: 4,
        name: "Bob",
        username: "bob_the_builder",
        isVerified: true,
        avatarImg: "https://api.dicebear.com/8.x/identicon/svg",
        bio: "Building things and making a difference!",
        email: "bob@example.com", // Dummy email
        password: "password123", // Dummy password
        posts: [
          {
            id: 6,
            userId: 4,
            content: "New project announcement",
            mediaLink: "https://example.com/image5.jpg",
            comments: [],
          },
          {
            id: 7,
            userId: 4,
            content: "Exciting news!",
            mediaLink: "https://example.com/image6.jpg",
            comments: [],
          },
        ],
      },
      {
        id: 5,
        name: "Sarah",
        username: "sarah_connor",
        isVerified: false,
        avatarImg: "https://api.dicebear.com/8.x/identicon/svg",
        bio: "Living life to the fullest!",
        email: "sarah@example.com", // Dummy email
        password: "password123", // Dummy password
        posts: [
          {
            id: 8,
            userId: 5,
            content: "Throwback Thursday",
            mediaLink: "https://example.com/image7.jpg",
            comments: [],
          },
          {
            id: 9,
            userId: 5,
            content: "Weekend vibes",
            mediaLink: "https://example.com/image8.jpg",
            comments: [],
          },
        ],
      },
      {
        id: 6,
        name: "Michael",
        username: "michael_scott",
        isVerified: false,
        avatarImg: "https://api.dicebear.com/8.x/identicon/svg",
        bio: "World's best boss!",
        email: "michael@example.com", // Dummy email
        password: "password123", // Dummy password
        posts: [
          {
            id: 10,
            userId: 6,
            content: "Coding all night",
            mediaLink: "https://example.com/image9.jpg",
            comments: [],
          },
          {
            id: 11,
            userId: 6,
            content: "Tech conference",
            mediaLink: "https://example.com/image10.jpg",
            comments: [],
          },
        ],
      },
    ],
  };
  
  export const filteredPosts = socialMediaData.users
    .filter((user) => user.id === 1)
    .flatMap((user) => user.posts);
  
  export const filteredUsers = socialMediaData.users.filter(
    (user) => user.id > 1
  );
  
  export const publicationsData = socialMediaData.users.flatMap(
    (user) => user.posts
  );
  
  export const getUserById = (userId: number): User | undefined => {
    return socialMediaData.users.find((user) => user.id === userId);
  };
  
  export const getPostById = (postId: number): Post | undefined => {
    return socialMediaData.users
      .flatMap((user) => user.posts)
      .find((post) => post.id === postId);
  };
  
  export const getUserByPostId = (postId: number): User | undefined => {
    return socialMediaData.users.find((user) =>
      user.posts.some((post) => post.id === postId)
    );
  };
  
  export const getCommentsByPostId = (postId: number): Comment[] => {
    const post = getPostById(postId);
    if (post) {
      return post.comments;
    }
    return [];
  };
  
  export const getUserByCommentId = (commentId: number): User | undefined => {
    const user = socialMediaData.users.find((user) =>
      user.posts.some((post) =>
        post.comments.some((comment) => comment.id === commentId)
      )
    );
    if (user) {
      const comment = user.posts
        .flatMap((post) =>
          post.comments.find((comment) => comment.id === commentId)
        )
        .find(Boolean); // This will find the first non-undefined comment
  
      if (comment) {
        return socialMediaData.users.find((user) => user.id === comment.userId);
      }
    }
    return undefined;
  };
  
  export const getUserByUsernameOrId = (
    identifier: string | number
  ): User | undefined => {
    if (typeof identifier === "number") {
      return socialMediaData.users.find((user) => user.id === identifier);
    } else if (typeof identifier === "string") {
      return socialMediaData.users.find((user) => user.username === identifier);
    }
    return undefined;
  };
  
  export const getUserFromDb = async (email: any, pwHash: any): Promise<any> => {
    return socialMediaData.users.find(
      (user) => user.email === email && user.password === pwHash
    );
  };