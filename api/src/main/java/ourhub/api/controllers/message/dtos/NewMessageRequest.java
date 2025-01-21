package ourhub.api.controllers.message.dtos;

public record NewMessageRequest(String  userName, String message, String hubId, String userId) {
}
