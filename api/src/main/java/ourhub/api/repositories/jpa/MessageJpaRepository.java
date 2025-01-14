package ourhub.api.repositories.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ourhub.api.repositories.jpa.models.MessageJpaModel;

import java.util.List;

@Repository
public interface MessageJpaRepository extends JpaRepository<MessageJpaModel, Integer> {

    @Query("SELECT m FROM message m WHERE m.hubId = :hubId")
    List<MessageJpaModel> findByHubId(@Param("hubId") String id);
}
