package ourhub.api.repositories.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ourhub.api.repositories.jpa.models.UserJpaModel;

import java.util.Optional;

@Repository
public interface UserJpaRepository extends JpaRepository<UserJpaModel, String> {

    @Query("SELECT u from users u WHERE u.email = :email")
    Optional<UserJpaModel> findByEmail(@Param("email") String email);
}
