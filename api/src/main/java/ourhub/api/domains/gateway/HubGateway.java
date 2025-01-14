package ourhub.api.domains.gateway;

import ourhub.api.domains.entities.Hub;

public interface HubGateway {
    void create(final Hub hub);
    Hub findById(final String id);
    Hub findByName(final String name);
}
