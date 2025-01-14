package ourhub.api.domain.gateway;

import ourhub.api.domain.entities.Hub;

public interface HubGateway {
    void create(final Hub hub);
    Hub findById(final String id);
    Hub findByName(final String name);
}
