public class UserRepo {

    public interface UserRepo extends JpaRepository<User, Integer> {
        Optional<User> findByEmail(String email);
    }
    
}
