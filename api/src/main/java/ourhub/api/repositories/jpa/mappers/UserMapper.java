package ourhub.api.repositories.jpa.mappers;

import ourhub.api.domains.entities.User;
import ourhub.api.repositories.jpa.models.HubJpaModel;
import ourhub.api.repositories.jpa.models.UserJpaModel;

import java.util.ArrayList;

public class UserMapper {

    public static User toDomain(UserJpaModel user){
        return User.build(
                user.getId(),
                user.getEmail(),
                user.getName(),
                user.getPassword(),
                user.getCreatedAt()
        );
    }

    public static UserJpaModel toModel(User user){
        return new UserJpaModel(
                user.getId(),
                user.getEmail(),
                user.getName(),
                user.getPassword(),
                user.getCreatedAt(),
                new ArrayList<HubJpaModel>()
        );
    }
}
