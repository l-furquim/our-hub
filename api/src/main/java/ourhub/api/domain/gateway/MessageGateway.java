package ourhub.api.domain.gateway;

import ourhub.api.domain.entities.Message;

public interface MessageGateway {
    void create(final Message message);
    void findById(final Integer id);
}
