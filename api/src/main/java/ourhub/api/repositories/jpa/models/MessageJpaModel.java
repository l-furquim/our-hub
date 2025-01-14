package ourhub.api.repositories.jpa.models;

import jakarta.persistence.*;

@Entity(name = "message")
@Table(name = "message")
public class MessageJpaModel {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name= "id")
        private Integer id;

        @Column(name = "content")
        private String content;

        public MessageJpaModel(){

        }

        public MessageJpaModel(final String content){
            this.content = content;
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
}
