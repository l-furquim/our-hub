package ourhub.api.repositories.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ourhub.api.repositories.jpa.models.HubJpaModel;

@Repository
public interface UserHubJpaRepository extends JpaRepository<HubJpaModel, String> {

    @Modifying
    @Query(value = "INSERT INTO user_hub (hub_id, user_id) VALUES (:hubId, :userId)", nativeQuery = true)
    void insertIntoUserHUb(@Param("userId") String userId, @Param("hubId") String hubId);

    @Modifying
    @Query(value = "DELETE FROM user_hub WHERE hub_id = :hubId AND user_id = :userId", nativeQuery = true)
    void leaveHub(@Param("userId") String userId,@Param("hubId") String hubId);
}
