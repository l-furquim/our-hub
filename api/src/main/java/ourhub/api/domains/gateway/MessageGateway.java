package ourhub.api.domains.gateway;

import ourhub.api.domains.entities.Message;

import java.time.Instant;
import java.util.List;

public interface MessageGateway {
    Message create(final Message message);
    Message findById(final Integer id);
    void delete(final Message message);
    List<Message> findByHubId(String id, Integer pages, Integer items);
}
