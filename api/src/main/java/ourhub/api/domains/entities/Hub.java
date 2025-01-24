package ourhub.api.domains.entities;

public class Hub {
    private String id;
    private String name;
    private String userId;

    private Hub(final String id, final String name, final String userId){
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.validate();
    }

    public static Hub build(final String id, final String name, final String userId){
        return new Hub(
            id,
            name,
                userId
        );
    }

    private void validate(){
        if(this.name.isEmpty() || this.name.length() < 3){
            throw new IllegalArgumentException("Hub name must contain at least 3 chars");
        }
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
