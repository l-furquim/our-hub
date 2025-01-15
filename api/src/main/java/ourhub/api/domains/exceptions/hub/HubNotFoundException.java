package ourhub.api.domains.exceptions.hub;

public class HubNotFoundException extends RuntimeException {
    public HubNotFoundException(String message) {
        super(message);
    }
}
