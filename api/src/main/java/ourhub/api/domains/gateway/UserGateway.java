package ourhub.api.domains.gateway;

import ourhub.api.domains.entities.Hub;
import ourhub.api.domains.entities.User;

import java.util.List;

public interface UserGateway {
    void create(final User user);
    User findById(final String id);
    User findByEmail(final String email);
    User login(String email, String password);
    List<Hub> findUserHubs(String userId);
}
