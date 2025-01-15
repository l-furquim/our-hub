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
        this.messageService.create(request.message(), Instant.now(), "bfcaaf8c-1827-4f45-aeac-6c6baccd0b8f", "3c19bbb7-0ccd-4d94-9635-bcf6ecd0da74");

        return new NewMessageResponse(
                HtmlUtils.htmlEscape(request.user() + ": " + request.message())
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
