package ourhub.api.controllers.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.HtmlUtils;
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
        this.messageService.create(request.message(), Instant.now());

        return new NewMessageResponse(
                HtmlUtils.htmlEscape(request.user() + ": " + request.message())
        );
    }
}
