package ourhub.api.domains.entities;

import java.time.Instant;

public class Message {
    private Integer id;
    private String content;
    private Instant sendedAt;

    private Message(final String content, final Instant sendedAt){
        this.content = content;
        this.sendedAt = sendedAt;
        this.validate();
    }

    public static Message build(final String content, final Instant sendedAt){
        return new Message(
                content,
                sendedAt
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
}
