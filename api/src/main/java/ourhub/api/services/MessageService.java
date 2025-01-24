package ourhub.api.services;

import ourhub.api.domains.entities.Message;

import java.time.Instant;
import java.util.List;

public interface MessageService {
    Message get(final Integer id);
    Message create(final String content, final Instant sendedAt, final String hubId, final String userId, final String userName);
    void delete(final Integer id);
    List<Message> getByHub(String id, Integer pages, Integer items);
}
