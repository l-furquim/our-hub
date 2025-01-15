package ourhub.api.domains.exceptions.handler;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ourhub.api.domains.exceptions.hub.HubNotFoundException;
import ourhub.api.domains.exceptions.hub.InvalidDataForNewHubException;
import ourhub.api.domains.exceptions.user.InvalidAuthException;

@ControllerAdvice
public class HubExceptionHandler {

    @ExceptionHandler(value = {HubNotFoundException.class})
    protected ResponseEntity<GlobalExceptionHandler> handleHubNotFound(
    ){
        return ResponseEntity.notFound().build();
    }
    @ExceptionHandler(value = {InvalidDataForNewHubException.class})
    protected ResponseEntity<GlobalExceptionHandler> handleInvalidDataForNewHub(
            final InvalidDataForNewHubException hubException,
            final HttpServletRequest aRequest
    ){
        final var aBody = new GlobalExceptionHandler(
                hubException.getMessage(),
                HttpStatus.UNAUTHORIZED.value(),
                aRequest.getRequestURI()
        );
        return ResponseEntity.unprocessableEntity().body(aBody);
    }
}
