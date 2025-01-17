package ourhub.api.controllers.user.dtos;

import ourhub.api.domains.entities.Hub;

import java.util.List;

public record GetUserHubsResponse(List<Hub> hubs) {
}
