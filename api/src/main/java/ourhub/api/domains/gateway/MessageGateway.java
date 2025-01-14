package ourhub.api.domains.gateway;

import ourhub.api.domains.entities.Message;

public interface MessageGateway {
    void create(final Message message);
    Message findById(final Integer id);
    void delete(final Message message);
}
