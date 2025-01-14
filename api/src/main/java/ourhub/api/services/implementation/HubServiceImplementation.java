package ourhub.api.services.implementation;

import ourhub.api.domain.entities.Hub;
import ourhub.api.domain.gateway.HubGateway;
import ourhub.api.services.HubService;

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
    public Hub create(String id, String name) {
        final var hubAlredyExists = this.hubGateway.findByName(name) != null;

        if(hubAlredyExists){
            throw new IllegalArgumentException("A hub alredy exists with this name");
        }

        final var hub = Hub.build(
                id,
                name
        );

        this.hubGateway.create(hub);

        return hub;
    }
}
