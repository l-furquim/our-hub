package ourhub.api.domains.gateway;

import ourhub.api.domains.entities.Hub;
import ourhub.api.domains.entities.User;
import ourhub.api.repositories.jpa.models.UserJpaModel;

import java.util.List;

public interface HubGateway {
    void create(final Hub hub, String userId);
    Hub findById(final String id);
    Hub findByName(final String name);
    List<Hub> findByUserId(String id);
}
