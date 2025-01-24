package ourhub.api.domains.exceptions.handler;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ourhub.api.domains.exceptions.hub.HubNotFoundException;
import ourhub.api.domains.exceptions.message.InvalidDataForMessageSearchException;
import ourhub.api.domains.exceptions.message.MessageNotFoundException;

@ControllerAdvice
public class MessageExceptionHandler {

    @ExceptionHandler(value = {MessageNotFoundException.class})
    protected ResponseEntity<GlobalExceptionHandler> handleMessageNotFound(
    ){
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(value = {InvalidDataForMessageSearchException.class})
    protected ResponseEntity<GlobalExceptionHandler> handleInvalidDataForMessageSearch(
            final InvalidDataForMessageSearchException messageException,
            final HttpServletRequest aRequest
    ){
        final var aBody = new GlobalExceptionHandler(
                messageException.getMessage(),
                HttpStatus.BAD_REQUEST.value(),
                aRequest.getRequestURI()
        );
        return ResponseEntity.badRequest().body(aBody);
    }
}
