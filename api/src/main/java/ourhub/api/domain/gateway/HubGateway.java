package ourhub.api.domain.gateway;

import ourhub.api.domain.entities.Hub;

public interface HubGateway {
    void create(final Hub hub);
    void findById(final String id);
}
