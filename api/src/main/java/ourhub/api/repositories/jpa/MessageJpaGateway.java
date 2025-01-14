package ourhub.api.repositories.jpa;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ourhub.api.domains.entities.Message;
import ourhub.api.domains.gateway.MessageGateway;
import ourhub.api.repositories.jpa.mappers.MessageMapper;

public class MessageJpaGateway implements MessageGateway {

    private static final Logger log = LoggerFactory.getLogger(MessageJpaGateway.class);
    private final MessageJpaRepository repository;

    public MessageJpaGateway(final MessageJpaRepository repository){
        this.repository = repository;
    }

    @Override
    public void create(Message message) {
        final var messageModel = MessageMapper.toModel(message);

        this.repository.save(messageModel);
    }

    @Override
    public Message findById(Integer id) {
        final var message = this.repository.findById(id);

        if(message.isEmpty()){
            return null;
        }

        return MessageMapper.toDomain(message.get());
    }

    @Override
    public void delete(Message message) {
        final var messageModel = this.repository.findById(message.getId());

        this.repository.delete(messageModel.get());
    }
}
