package ourhub.api.services.implementation;

import org.springframework.stereotype.Service;
import ourhub.api.domains.entities.Hub;
import ourhub.api.domains.gateway.HubGateway;
import ourhub.api.services.HubService;

import java.util.List;
import java.util.UUID;

@Service
public class HubServiceImplementation implements HubService {

    private final HubGateway hubGateway;

    public HubServiceImplementation(final HubGateway hubGateway){
        this.hubGateway = hubGateway;
    }


    @Override
    public Hub get(String id) {
        if(id.isEmpty()){
            throw new IllegalArgumentException("Cannot find a hub with a empty string");
        }

        final var hub = this.hubGateway.findById(id);

        if(hub == null){
            throw new IllegalArgumentException("Hub not found with id " + id);
        }

        return hub;
    }

    @Override
    public Hub create(String name, String userId) {
        final var hubAlredyExists = this.hubGateway.findByName(name) != null;

        if(hubAlredyExists){
            throw new IllegalArgumentException("A hub alredy exists with this name");
        }

        final var hub = Hub.build(
                UUID.randomUUID().toString(),
                name,
                userId
        );

        this.hubGateway.create(hub);

        return hub;
    }

    @Override
    public List<Hub> getByUserId(String id) {
        if(id.isBlank()){
            throw  new IllegalArgumentException("Cannot find users hubs because id is empty");
        }

        return this.hubGateway.findByUserId(id);
    }
}
