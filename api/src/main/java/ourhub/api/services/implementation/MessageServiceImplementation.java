package ourhub.api.services.implementation;

import org.springframework.stereotype.Service;
import ourhub.api.domains.entities.Message;
import ourhub.api.domains.gateway.MessageGateway;
import ourhub.api.services.MessageService;

import java.time.Instant;

@Service
public class MessageServiceImplementation implements MessageService {
    private final MessageGateway MessageGateway;

    public MessageServiceImplementation(MessageGateway messageGateway){
        this.MessageGateway = messageGateway;
    }

    @Override
    public Message get(Integer id) {
        if(id == 0 || id == null){
            throw new IllegalArgumentException("Id invalid for search");
        }

        final var message = this.MessageGateway.findById(id);

        if(message == null){
            throw new IllegalArgumentException("Message not found with id " + id);
        }

        return message;
    }

    @Override
    public Message create(String content, Instant sendedAt) {
        final var message = Message.build(content, sendedAt);

        this.MessageGateway.create(message,sendedAt);

        return message;
    }

    @Override
    public void delete(Integer id) {
        final var message = this.MessageGateway.findById(id);

        if(message == null){
            throw new IllegalArgumentException("Cant delete, message doesn't exist");
        }

        this.MessageGateway.delete(message);
    }
}
