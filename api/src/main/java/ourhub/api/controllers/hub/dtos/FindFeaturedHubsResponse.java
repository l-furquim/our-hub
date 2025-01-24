package ourhub.api.controllers.hub.dtos;

import ourhub.api.domains.entities.Hub;
import ourhub.api.dtos.FeaturedHubDto;

import java.util.List;

public record FindFeaturedHubsResponse(List<FeaturedHubDto> hubs) {
}
