package ourhub.api.repositories.jpa;

import org.springframework.stereotype.Component;
import ourhub.api.domains.entities.User;
import ourhub.api.domains.gateway.UserGateway;
import ourhub.api.repositories.jpa.mappers.UserMapper;

@Component
public class UserJpaGateway implements UserGateway {

    private final UserJpaRepository repository;

    public UserJpaGateway(UserJpaRepository repository){
        this.repository = repository;
    }

    @Override
    public void create(User user) {
        final var userModel = UserMapper.toModel(user);

        this.repository.save(userModel);
    }

    @Override
    public User findById(String id) {
        final var userModel = this.repository.findById(id);

        if(userModel.isEmpty()){
            return null;
        }

        return UserMapper.toDomain(userModel.get());
    }

    @Override
    public User findByEmail(String email) {
        final var userModel = this.repository.findByEmail(email);

        if(userModel.isEmpty()){
            return null;
        }

        return UserMapper.toDomain(userModel.get());
    }

    @Override
    public boolean login(String email, String password) {
        final var userModel = this.repository.findByEmail(email);

        return userModel.isPresent() && (userModel.get().getPassword().equals(password));
    }
}
