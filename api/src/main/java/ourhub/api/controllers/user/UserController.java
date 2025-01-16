package ourhub.api.controllers.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ourhub.api.controllers.user.dtos.*;
import ourhub.api.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController (UserService userService){
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<Void> newUser(@RequestBody NewUserRequest request){
        this.userService.create(
                request.email(),
                request.name(),
                request.password()
        );

        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    public ResponseEntity<LoginUserResponse> loginUser(@RequestBody LoginUserRequest request){
        final var session = this.userService.login(
                request.email(),
                request.password()
        );

        return ResponseEntity.ok().body(session);
    }

    @PostMapping("/validateToken")
    public ResponseEntity<ValidateTokenResponse> validateToken(@RequestBody ValidateTokenRequest request){
        final var isValid = this.userService.validateToken(request.token());

        return ResponseEntity.ok().body(new ValidateTokenResponse(isValid));
    }
}
