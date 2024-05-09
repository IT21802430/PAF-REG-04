public class PostRepo {
    

    
        List<Post> findByUser(User user);
    
        List<Post> findByCategory(Category category);
    
        @Query("select p from Post p where p.title like :key")
        List<Post> searchByTitle(@Param("key") String title);
    
    
}
