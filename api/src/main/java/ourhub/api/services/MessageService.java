package ourhub.api.services;

import ourhub.api.domains.entities.Message;

public interface MessageService {
    Message get(final Integer id);
    Message create(final String content);
    void delete(final Integer id);
}
