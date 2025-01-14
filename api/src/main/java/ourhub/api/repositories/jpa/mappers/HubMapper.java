package ourhub.api.repositories.jpa.mappers;

import ourhub.api.domain.entities.Hub;
import ourhub.api.repositories.jpa.models.HubJpaModel;

public class HubMapper {
    public static Hub toDomain(HubJpaModel hubJpaModel){
        return Hub.build(
                hubJpaModel.getId(),
                hubJpaModel.getName()
        );
    }
    public static HubJpaModel toModel(Hub hub){
        return new HubJpaModel(
                hub.getId(),
                hub.getName()
        );
    }
}
