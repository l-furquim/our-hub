package ourhub.api.repositories.jpa.mappers;

import ourhub.api.domains.entities.Message;
import ourhub.api.repositories.jpa.models.MessageJpaModel;

public class MessageMapper {

    public static Message toDomain(MessageJpaModel model){
        final var messageDomain = Message.build(
                model.getContent(),
                model.getSendedAt(),
                model.getHubId(),
                model.getUserId()
        );
        messageDomain.setId(model.getId());
        return messageDomain;
    }

    public static MessageJpaModel toModel(Message message){
        return new MessageJpaModel(
                message.getContent(),
                message.getSendedAt(),
                message.getHubId(),
                message.getUserId()
        );
    }
}
