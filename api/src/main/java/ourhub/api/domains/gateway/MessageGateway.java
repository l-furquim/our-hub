package ourhub.api.domains.gateway;

import ourhub.api.domains.entities.Message;

import java.time.Instant;

public interface MessageGateway {
    void create(final Message message, final Instant sendedAt);
    Message findById(final Integer id);
    void delete(final Message message);
}
