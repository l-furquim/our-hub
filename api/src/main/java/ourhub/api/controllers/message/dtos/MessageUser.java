package ourhub.api.controllers.message.dtos;

import java.time.Instant;

public class MessageUser{
    private Integer id;
    private String content;
    private String user;
    private String userId;
    private Instant sendedAt;

    public MessageUser(Integer id, String content, String user, String userId, Instant sendedAt) {
        this.id = id;
        this.content = content;
        this.user = user;
        this.userId = userId;
        this.sendedAt = sendedAt;
    }
}
