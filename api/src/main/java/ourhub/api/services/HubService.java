package ourhub.api.services;

import ourhub.api.domains.entities.Hub;
import ourhub.api.dtos.FeaturedHubDto;

import java.util.List;

public interface HubService {
    Hub get(final String id);
    Hub create(final String name, final String userId);
    List<Hub> getByUserId(String id);
    List<FeaturedHubDto> findFeatured(String userId);
    void enterHub(String userId,String hubId);
    void leaveHub(String userId, String hubId);
}
