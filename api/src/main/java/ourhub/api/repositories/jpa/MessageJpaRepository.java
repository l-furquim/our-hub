package ourhub.api.repositories.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ourhub.api.repositories.jpa.models.MessageJpaModel;

@Repository
public interface MessageJpaRepository extends JpaRepository<MessageJpaModel, Integer> {
}
