package ourhub.api.controllers.user.dtos;

import ourhub.api.domains.entities.User;

public record LoginUserResponse (User session, String token){
}
