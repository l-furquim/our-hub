package ourhub.api.services;

import ourhub.api.controllers.user.dtos.LoginUserResponse;
import ourhub.api.domains.entities.Hub;
import ourhub.api.domains.entities.User;

import java.util.List;

public interface UserService {

    LoginUserResponse create(String email, String name, String password, String id);
    User findById(String id);
    User findByEmail(String email);
    LoginUserResponse login(String email, String password);
    boolean validateToken(String token);
    List<Hub> findUserHubs(String userId);
}
