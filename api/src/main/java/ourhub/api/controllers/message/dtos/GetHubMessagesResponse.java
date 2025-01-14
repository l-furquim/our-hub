package ourhub.api.controllers.message.dtos;

import ourhub.api.domains.entities.Message;

import java.util.List;

public record GetHubMessagesResponse(List<Message> messages) {
}
