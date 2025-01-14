package ourhub.api.repositories.jpa.mappers;

import ourhub.api.domains.entities.Hub;
import ourhub.api.repositories.jpa.models.HubJpaModel;

public class HubMapper {
    public static Hub toDomain(HubJpaModel hubJpaModel){
        return Hub.build(
                hubJpaModel.getId(),
                hubJpaModel.getName(),
                hubJpaModel.getUserId()
        );
    }
    public static HubJpaModel toModel(Hub hub){
        return new HubJpaModel(
                hub.getId(),
                hub.getName(),
                hub.getUserId()
        );
    }
}
