package ourhub.api.services;

import ourhub.api.domain.entities.Hub;

public interface HubService {
    Hub get(final String id);
    Hub create(final String id, final String name);
}
