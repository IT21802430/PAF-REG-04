public class RoleRepo {
    
    import org.springframework.data.jpa.repository.JpaRepository;

    public interface RoleRepo extends JpaRepository<Role, Integer> {

}
}
