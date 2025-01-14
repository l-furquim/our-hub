package ourhub.api.services;


import ourhub.api.domains.entities.User;

public interface AuthService {
    User getUserByToken(String token);
    String createToken(final String email);

}
