package ourhub.api.services;


import org.springframework.security.core.userdetails.UserDetails;
import ourhub.api.domains.entities.User;

public interface AuthService {
    User getUserByToken(String token);
    String createToken(final String email);
    UserDetails loadUserByUsername(String email);
    String validateToken(String token);
}
