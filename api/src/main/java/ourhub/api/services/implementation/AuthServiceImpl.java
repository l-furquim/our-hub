package ourhub.api.services.implementation;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ourhub.api.domains.entities.User;
import ourhub.api.domains.gateway.UserGateway;
import ourhub.api.services.AuthService;
import ourhub.api.services.UserService;

import java.time.Instant;

@Service
public class AuthServiceImpl implements AuthService, UserDetailsService {

    private final static String SECRET = "segredo...";
    private final static String ISSUER = "ourhub-auth";
    private final Algorithm ALGORITHM = Algorithm.HMAC256(SECRET);
    private final UserGateway userGateway;

    public AuthServiceImpl(UserGateway userGateway){
        this.userGateway = userGateway;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final var user = this.userGateway.findByEmail(username);

        if(user == null){
            throw new IllegalArgumentException("No user found with with this username " + username);
        }

        return user;
    }

    @Override
    public String validateToken(String token) {
        try{
            final var aVerifier = JWT.require(ALGORITHM)
                    .withIssuer(ISSUER).build();

            final var decodedToken = aVerifier.verify(token);

            final var subject = decodedToken.getSubject();

            return subject;
        }catch (Exception e){
            throw new JWTVerificationException("Invalid token " + token + e.getMessage());
        }
    }

    @Override
    public User getUserByToken(String token) {
        final var aVerifier = JWT.require(ALGORITHM)
                .withIssuer(ISSUER).build();

        final var decodedToken = aVerifier.verify(token);

        final var user = this.userGateway.findByEmail(decodedToken.getSubject());

        if(user == null){
            throw new IllegalArgumentException("No user found with this token! " + token);
        }
        return user;
    }

    @Override
    public String createToken(String email) {
        try{
            final var token = JWT.create().withIssuer(
                    ISSUER
            ).withSubject(email)
                    .withExpiresAt(Instant.now().plusSeconds(60 * 60 * 4)) // 10.800 segundos
                    .sign(ALGORITHM);

            return token;
        }catch (JWTCreationException e){
            throw new IllegalArgumentException(e.getMessage());
        }
    }
}
