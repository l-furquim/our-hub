package ourhub.api.repositories.jpa;

import org.springframework.stereotype.Component;
import ourhub.api.domains.entities.Hub;
import ourhub.api.domains.gateway.HubGateway;
import ourhub.api.repositories.jpa.mappers.HubMapper;

import java.util.ArrayList;
import java.util.List;

@Component
public class HubJpaGateway implements HubGateway {

    private final HubJpaRepository repository;

    public HubJpaGateway(final HubJpaRepository hubJpaRepository){
        this.repository = hubJpaRepository;
    }

    @Override
    public void create(Hub hub) {
        final var hubModel = HubMapper.toModel(hub);

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
