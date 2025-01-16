package ourhub.api.services.implementation;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import ourhub.api.controllers.user.dtos.LoginUserResponse;
import ourhub.api.domains.entities.User;
import ourhub.api.domains.exceptions.user.InvalidAuthException;
import ourhub.api.domains.exceptions.user.UserAlredyExistsException;
import ourhub.api.domains.exceptions.user.UserNotFoundException;
import ourhub.api.domains.gateway.UserGateway;
import ourhub.api.services.UserService;

import java.time.Instant;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    private final UserGateway userGateway;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserServiceImpl(UserGateway gateway){
        this.userGateway = gateway;
    }

    @Override
    public void create(String email, String name, String password) {
        final var userAlredyExists = this.userGateway.findByEmail(email);

        if(userAlredyExists != null){
            throw new UserAlredyExistsException("A user alredy exists with this email");
        }


        final var user = User.build(
                UUID.randomUUID().toString(),
                email,
                name,
                password,
                Instant.now()
        );

        this.userGateway.create(user);
    }

    @Override
    public User findById(String id) {
        if(id.isBlank()){
            throw new IllegalArgumentException("Cannot find a user by a blank id " + id);
        }

        final var user = this.userGateway.findById(id);

        if(user == null){
            throw new UserNotFoundException("A user alredy exists with this email");
        }

        return user;
    }

    @Override
    public User findByEmail(String email) {
        final var user = this.userGateway.findById(email);

        if(user == null){
            throw new UserNotFoundException("Cannot find a user with that email " + email);
        }

        return user;
    }

    @Override
    public LoginUserResponse login(String email, String password) {
        final var user = this.userGateway.login(email, password);

        if(user != null){
            final var AuthService = new AuthServiceImpl(this.userGateway);

            final var token =  AuthService.createToken(email);

            return new LoginUserResponse(user, token);
        }else{
            throw new InvalidAuthException("Email or password are wrong");
        }
    }

    @Override
    public boolean validateToken(String token) {
        if(token.isBlank()){
            throw new InvalidAuthException("Cannot validate a blank token");
        }

        final var AuthService = new AuthServiceImpl(this.userGateway);

        return AuthService.isTokenValid(token);
    }
}
