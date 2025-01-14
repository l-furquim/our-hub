package ourhub.api.domains.entities;

import java.time.Instant;

public class Message {
    private Integer id;
    private String content;
    private Instant sendedAt;
    private String hubId;
    private String userId;

    private Message(final String content, final Instant sendedAt, final String hubId, final String userId){
        this.content = content;
        this.sendedAt = sendedAt;
        this.hubId = hubId;
        this.userId = userId;
        this.validate();
    }

    public static Message build(final String content, final Instant sendedAt, final String hubId, final String userId){
        return new Message(
                content,
                sendedAt,
                hubId,
                userId
        );
    }

    private void validate(){
        if(this.content.isEmpty()){
            throw new IllegalArgumentException("Messages cannot be empty");
        }
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Instant getSendedAt() {
        return sendedAt;
    }

    public void setSendedAt(Instant sendedAt) {
        this.sendedAt = sendedAt;
    }

    public String getHubId() {
        return hubId;
    }

    public void setHubId(String hubId) {
        this.hubId = hubId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
