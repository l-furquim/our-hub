package ourhub.api.domains.exceptions.handler;


import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ourhub.api.domains.exceptions.user.InvalidAuthException;
import ourhub.api.domains.exceptions.user.UserAlredyExistsException;
import ourhub.api.domains.exceptions.user.UserNotFoundException;

@ControllerAdvice
public class UserExceptionHandler {

    @ExceptionHandler(value = {InvalidAuthException.class})
    protected ResponseEntity<GlobalExceptionHandler> handleInvalidAuth(
            final InvalidAuthException userException,
            final HttpServletRequest aRequest
    ){
        final var aBody = new GlobalExceptionHandler(
                userException.getMessage(),
                HttpStatus.BAD_REQUEST.value(),
                aRequest.getRequestURI()
        );
        return ResponseEntity.badRequest().body(aBody);
    }

    @ExceptionHandler(value = {UserAlredyExistsException.class})
    protected ResponseEntity<GlobalExceptionHandler> handleUserAlredyExist(
            final UserAlredyExistsException userException,
            final HttpServletRequest aRequest
    ){
        final var aBody = new GlobalExceptionHandler(
                userException.getMessage(),
                HttpStatus.UNAUTHORIZED.value(),
                aRequest.getRequestURI()
        );
        return ResponseEntity.unprocessableEntity().body(aBody);
    }
    @ExceptionHandler(value = {UserNotFoundException.class})
    protected ResponseEntity<GlobalExceptionHandler> handleUserNotFound(
    ){
        return ResponseEntity.notFound().build();
    }
}
