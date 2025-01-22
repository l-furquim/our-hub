package ourhub.api.repositories.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ourhub.api.repositories.jpa.models.HubJpaModel;

@Repository
public interface UserHubRepository extends JpaRepository<HubJpaModel, String> {

    @Modifying
    @Query(value = "INSERT INTO user_hub (hub_id, user_id) VALUES (:userId, :hubId)", nativeQuery = true)
    void insertIntoUserHUb(@Param("userId") String userId, @Param("hubId") String hubId);
}
