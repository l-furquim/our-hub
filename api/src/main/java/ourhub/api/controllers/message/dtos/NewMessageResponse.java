package ourhub.api.controllers.message.dtos;

public record NewMessageResponse(String user,String userId, String content, Integer messageId) {
}
