package ourhub.api.services.implementation;

import org.springframework.stereotype.Service;
import ourhub.api.domains.entities.User;
import ourhub.api.domains.gateway.UserGateway;
import ourhub.api.services.UserService;

import java.time.Instant;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    private final UserGateway userGateway;

    public UserServiceImpl(UserGateway gateway){
        this.userGateway = gateway;
    }

    @Override
    public void create(String email, String name, String password) {
        final var userAlredyExists = this.userGateway.findByEmail(email);

        if(userAlredyExists != null){
            throw new IllegalArgumentException("A user alredy exists with this email");
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
            throw new IllegalArgumentException("A user alredy exists with this email");
        }

        return user;
    }

    @Override
    public User findByEmail(String email) {
        final var user = this.userGateway.findById(email);

        if(user == null){
            throw new IllegalArgumentException("Cannot find a user with that email " + email);
        }

        return user;
    }

    @Override
    public String login(String email, String password) {
        final var sucess = this.userGateway.login(email, password);

        if(sucess){
            final var AuthService = new AuthServiceImpl(this.userGateway);

            return AuthService.createToken(email);
        }else{
            throw new IllegalArgumentException("Email or password are wrong");
        }
    }
}
