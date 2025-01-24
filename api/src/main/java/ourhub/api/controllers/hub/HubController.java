package ourhub.api.controllers.hub;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ourhub.api.controllers.hub.dtos.FindFeaturedHubsResponse;
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

    @GetMapping("/find/featured/{userId}")
    public ResponseEntity<FindFeaturedHubsResponse> findFeatured(@PathVariable("userId") String userId){
        final var hubs = service.findFeatured(userId);

        return ResponseEntity.ok().body(new FindFeaturedHubsResponse(hubs));
    }

    @PutMapping("/enter/{userId}/{hubId}")
    public ResponseEntity<Void> enterHub(@PathVariable("userId") String userId, @PathVariable("hubId")String hubId){
        this.service.enterHub(userId, hubId);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/leave/{hubId}/{userId}")
    public ResponseEntity<Void> leaveHub(@PathVariable("userId") String userId, @PathVariable("hubId")String hubId){
        this.service.leaveHub(userId, hubId);

        return ResponseEntity.noContent().build();
    }
}
