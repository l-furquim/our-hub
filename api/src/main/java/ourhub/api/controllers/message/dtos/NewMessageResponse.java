package ourhub.api.controllers.message.dtos;

public record NewMessageResponse(String user, String content, Integer messageId) {
}
