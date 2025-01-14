package ourhub.api.repositories.jpa.models;

import jakarta.persistence.*;

import java.time.Instant;

@Entity(name = "message")
@Table(name = "message")
public class MessageJpaModel {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name= "id")
        private Integer id;

        @Column(name = "content")
        private String content;

        @Column(name = "sended_at")
        private Instant sendedAt;

        @Column(name = "hub_id")
        private String hubId;

        @Column(name = "user_id")
        private String userId;

        public MessageJpaModel(){

        }

        public MessageJpaModel(final String content, final Instant sendedAt, final String hubId, final String userId){
            this.content = content;
            this.sendedAt = sendedAt;
            this.hubId = hubId;
            this.userId = userId;
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
