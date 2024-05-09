public class CommentRepo {

    import org.springframework.data.jpa.repository.JpaRepository;

    public interface CommentRepo extends JpaRepository<Comment, Integer> {

}
    
}
