package ourhub.api.repositories.jpa;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;
import ourhub.api.domains.entities.Message;
import ourhub.api.domains.gateway.MessageGateway;
import ourhub.api.repositories.jpa.mappers.MessageMapper;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Component
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

    @Override
    public List<Message> findByHubId(String id, Integer pages, Integer items) {
        final var messages = this.repository.findByHubId(id, PageRequest.of(pages,items));

        if(messages.isEmpty()){
            return new ArrayList<Message>();
        }

        return messages.stream().map(m -> MessageMapper.toDomain(m)).toList();
    }
}
