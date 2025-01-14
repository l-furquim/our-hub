package ourhub.api.controllers.hub;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ourhub.api.controllers.hub.dtos.NewHubRequest;
import ourhub.api.controllers.hub.dtos.NewHubResponse;
import ourhub.api.services.HubService;

@RestController
@RequestMapping("/hub")
public class HubController {

    private final HubService service;

    @Autowired
    public HubController(HubService service){
        this.service = service;
    }

    @PostMapping("/new")
    public ResponseEntity<NewHubResponse> newHub(@RequestBody NewHubRequest request){
        final var hub = service.create(request.name());

        return ResponseEntity.ok().body(new NewHubResponse(hub));
    }
}
