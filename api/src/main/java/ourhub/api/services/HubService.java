package ourhub.api.services;

import ourhub.api.domains.entities.Hub;

import java.util.List;

public interface HubService {
    Hub get(final String id);
    Hub create(final String name, final String userId);
    List<Hub> getByUserId(String id);
}
