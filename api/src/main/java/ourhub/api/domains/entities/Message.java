package ourhub.api.domains.entities;

public class Message {
    private Integer id;
    private String content;

    private Message(final String content){
        this.content = content;
        this.validate();
    }

    public static Message build(final String content){
        return new Message(
                content
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
}
