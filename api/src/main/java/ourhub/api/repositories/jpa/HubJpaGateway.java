package ourhub.api.repositories.jpa;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ourhub.api.domains.entities.Hub;
import ourhub.api.domains.entities.User;
import ourhub.api.domains.gateway.HubGateway;
import ourhub.api.repositories.jpa.mappers.HubMapper;
import java.util.ArrayList;
import java.util.List;

@Component
public class HubJpaGateway implements HubGateway {

    private final HubJpaRepository repository;
    private final UserJpaRepository userRepository;

    public HubJpaGateway(final HubJpaRepository hubJpaRepository, UserJpaRepository userJpaRepository){
        this.repository = hubJpaRepository;
        this.userRepository = userJpaRepository;
    }


    @Transactional
    @Override
    public void create(Hub hub, String userId) {
        final var hubModel = HubMapper.toModel(hub);
        final var userModel = this.userRepository.findById(userId).get();

        hubModel.addUser(userModel);
        userModel.addHub(hubModel);

        this.repository.save(hubModel);
    }

    @Override
    public Hub findById(String id) {
        final var hubModel = this.repository.findById(id);

        if(hubModel == null){
            return null;
        }

        return HubMapper.toDomain(hubModel.get());
    }

    @Override
    public Hub findByName(String name) {
        final var hubModel = this.repository.findByName(name);

        if(hubModel.isEmpty()){
            return null;
        }

        return HubMapper.toDomain(hubModel.get());
    }

    @Override
    public List<Hub> findByUserId(String id) {
        final var hubs = this.repository.findByUserId(id);

        if(hubs.isEmpty()){
            return new ArrayList<>();
        }

        return hubs.stream().map((h -> HubMapper.toDomain(h)
        )).toList();
    }
}
