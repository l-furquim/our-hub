package ourhub.api.services.implementation;

import org.springframework.stereotype.Service;
import ourhub.api.domains.entities.Message;
import ourhub.api.domains.exceptions.message.InvalidDataForMessageSearchException;
import ourhub.api.domains.exceptions.message.MessageNotFoundException;
import ourhub.api.domains.gateway.MessageGateway;
import ourhub.api.services.MessageService;

import java.time.Instant;
import java.util.List;

@Service
public class MessageServiceImplementation implements MessageService {
    private final MessageGateway MessageGateway;

    public MessageServiceImplementation(MessageGateway messageGateway){
        this.MessageGateway = messageGateway;
    }

    @Override
    public Message get(Integer id) {
        if(id == 0 || id == null){
            throw new MessageNotFoundException("Id invalid for search");
        }

        final var message = this.MessageGateway.findById(id);

        if(message == null){
            throw new MessageNotFoundException("Message not found with id " + id);
        }

        return message;
    }

    @Override
    public Message create(String content, Instant sendedAt, final String hubId, final String userId, final String userName) {
        final var message = Message.build(content, sendedAt, hubId, userId, userName);


        return this.MessageGateway.create(message);
    }

    @Override
    public void delete(Integer id) {
        final var message = this.MessageGateway.findById(id);

        if(message == null){
            throw new MessageNotFoundException("Cant delete, message doesn't exist");
        }

        this.MessageGateway.delete(message);
    }

    @Override
    public List<Message> getByHub(String id, Integer pages, Integer items) {
        if(id.isBlank()){
            throw new InvalidDataForMessageSearchException("Cant find hubs message, id is blank");
        }
        return this.MessageGateway.findByHubId(id,pages,items);
    }
}
