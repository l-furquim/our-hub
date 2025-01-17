package ourhub.api.repositories.jpa.models;

import jakarta.persistence.*;

import java.util.List;

@Entity(name = "hub")
@Table(name = "hub")
public class HubJpaModel {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "user_id")
    private String userId;

    @ManyToMany
    @JoinTable(
            name = "user_hub",
            joinColumns = @JoinColumn(name = "hub_id"),
            inverseJoinColumns = @JoinColumn(name="user_id")
    )
    private List<UserJpaModel> users;


    public HubJpaModel(){

    }

    public HubJpaModel(final String id, final String name, final String userId, List<UserJpaModel> users){
        this.id = id;
        this.name = name;
        this.userId =userId;
        this.users = users;
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

    public List<UserJpaModel> getUsers() {
        return users;
    }

    public void addUser(UserJpaModel user) {
        if (!users.contains(user)) {
            users.add(user);
            user.addHub(this);
        }
    }
}
