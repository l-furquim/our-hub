package ourhub.api.domain.entities;

public class Hub {
    private String id;
    private String name;

    private Hub(final String id, final String name){
        this.id = id;
        this.name = name;
        this.validate();
    }

    public static Hub build(final String id, final String name){
        return new Hub(
            id,
            name
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
}
