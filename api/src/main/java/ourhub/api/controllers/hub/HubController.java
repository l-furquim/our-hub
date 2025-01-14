package ourhub.api.controllers.hub;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ourhub.api.controllers.hub.dtos.NewHubRequest;
import ourhub.api.controllers.hub.dtos.NewHubResponse;
import ourhub.api.controllers.user.dtos.UserHubsResponse;
import ourhub.api.services.HubService;

@RestController
@RequestMapping("/hub")
public class HubController {

    private final HubService service;

    @Autowired
    public HubController(final HubService service){
        this.service = service;
    }

    @PostMapping("/new")
    public ResponseEntity<NewHubResponse> newHub(@RequestBody NewHubRequest request){
        final var hub = service.create(request.name(), request.userId());

        return ResponseEntity.ok().body(new NewHubResponse(hub));
    }

    @GetMapping("/find/user/{userId}")
    public ResponseEntity<UserHubsResponse> userHubs(@PathVariable("userId") String userId){
        final var hubs = service.getByUserId(userId);

        return ResponseEntity.ok().body(new UserHubsResponse(hubs));
    }
}
