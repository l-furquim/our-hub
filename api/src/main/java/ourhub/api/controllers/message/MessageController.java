package ourhub.api.controllers.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;
import ourhub.api.controllers.message.dtos.GetHubMessagesResponse;
import ourhub.api.controllers.message.dtos.NewMessageRequest;
import ourhub.api.controllers.message.dtos.NewMessageResponse;
import ourhub.api.domains.entities.Message;
import ourhub.api.services.MessageService;

import java.time.Instant;

@RestController
@RequestMapping("/message")
public class MessageController {

    private final MessageService messageService;

    @Autowired
    public MessageController(MessageService messageService){
        this.messageService = messageService;
    }

    @MessageMapping("/new-message")
    @SendTo("/messages/livechat")
    public NewMessageResponse hello(@RequestBody NewMessageRequest request){
        final var message = this.messageService.create(request.message(), Instant.now(), request.hubId(),request.userId(), request.userName());

        return new NewMessageResponse(
                request.userName(),request.userId(),request.message(), message.getId()
        );
    }

    @GetMapping("/find/hub/{hubId}/{page}/{items}")
    public ResponseEntity<GetHubMessagesResponse> getHubMessages(@PathVariable("hubId") String hubId,
                                                                 @PathVariable("page") Integer pages,
                                                                 @PathVariable("items") Integer items){

        final var messages = this.messageService.getByHub(hubId, pages, items);

        return ResponseEntity.ok().body(new GetHubMessagesResponse(messages));
    }
}
