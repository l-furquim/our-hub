package ourhub.api.services;

import ourhub.api.domains.entities.Message;

import java.time.Instant;

public interface MessageService {
    Message get(final Integer id);
    Message create(final String content, final Instant sendedAt);
    void delete(final Integer id);
}
