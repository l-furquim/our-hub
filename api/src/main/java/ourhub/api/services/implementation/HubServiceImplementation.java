package ourhub.api.services.implementation;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ourhub.api.domains.entities.Hub;
import ourhub.api.domains.exceptions.hub.HubNotFoundException;
import ourhub.api.domains.exceptions.hub.InvalidDataForNewHubException;
import ourhub.api.domains.gateway.HubGateway;
import ourhub.api.domains.gateway.UserGateway;
import ourhub.api.dtos.FeaturedHubDto;
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
            throw new HubNotFoundException("Cannot find a hub with a empty string");
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
            throw new InvalidDataForNewHubException("A hub alredy exists with this name");
        }

        final var hub = Hub.build(
                UUID.randomUUID().toString(),
                name,
                userId
        );

        this.hubGateway.create(hub,userId);

        return hub;
    }

    @Override
    public List<Hub> getByUserId(String id) {
        if(id.isBlank()){
            throw  new HubNotFoundException("Cannot find users hubs because id is empty");
        }

        return this.hubGateway.findByUserId(id);
    }

    @Override
    public List<FeaturedHubDto> findFeatured(String userId) {
        final var hubs = this.hubGateway.findTheMostUsers(userId);

        return hubs;
    }

    @Override
    public void enterHub(String userId,String hubId) {
        if(userId.isBlank() || hubId.isBlank()){
            throw  new HubNotFoundException("Cannot enter with a hub or user id blank");
        }

        this.hubGateway.enterHub(userId, hubId);
    }

    @Override
    public void leaveHub(String userId, String hubId) {
        if(userId.isBlank() || hubId.isBlank()){
            throw  new HubNotFoundException("Cannot delete a hub with user or hub id blank");
        }

        this.hubGateway.leaveHub(userId, hubId);
    }
}
