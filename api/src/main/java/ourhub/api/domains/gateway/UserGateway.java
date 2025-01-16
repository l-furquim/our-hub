package ourhub.api.domains.gateway;

import ourhub.api.domains.entities.User;

public interface UserGateway {
    void create(final User user);
    User findById(final String id);
    User findByEmail(final String email);
    User login(String email, String password);
}
