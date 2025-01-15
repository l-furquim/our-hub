package ourhub.api.services;

import ourhub.api.domains.entities.User;

public interface UserService {

    void create(String email, String name, String password);
    User findById(String id);
    User findByEmail(String email);
    String login(String email, String password);
    boolean validateToken(String token);
}
