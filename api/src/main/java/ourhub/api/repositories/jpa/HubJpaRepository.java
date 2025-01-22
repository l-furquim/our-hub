package ourhub.api.repositories.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ourhub.api.dtos.FeaturedHubDto;
import ourhub.api.repositories.jpa.models.HubJpaModel;

import java.util.List;
import java.util.Optional;

@Repository
public interface HubJpaRepository extends JpaRepository<HubJpaModel, String> {

    @Query("SELECT h FROM hub h WHERE h.name = :name")
    Optional<HubJpaModel> findByName(@Param("name") final String name);

    @Query("SELECT h FROM hub h WHERE h.userId = :userId")
    List<HubJpaModel> findByUserId(@Param("userId") String userId);

    @Query("""
    SELECT new ourhub.api.dtos.FeaturedHubDto(
        h.id, h.name, COUNT(u), h.userId,
        CASE WHEN EXISTS (
            SELECT 1 FROM h.users u WHERE u.id = :userId
        ) THEN true ELSE false END
    )
    FROM hub h
    LEFT JOIN h.users u
    GROUP BY h.id, h.name, h.userId
    ORDER BY COUNT(u) DESC
    """)
    List<FeaturedHubDto> findTopTenHubsByUserCount(@Param("userId") String userId);




}
