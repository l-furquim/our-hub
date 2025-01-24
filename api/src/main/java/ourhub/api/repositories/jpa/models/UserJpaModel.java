package ourhub.api.repositories.jpa.models;

import jakarta.persistence.*;

import java.time.Instant;
import java.util.List;

@Entity(name = "users")
@Table(name = "users")
public class UserJpaModel {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "email")
    private String email;

    @Column(name = "name")
    private String name;

    @Column(name = "password")
    private String password;

    @Column(name = "created_at")
    private Instant createdAt;

    @ManyToMany(mappedBy = "users")
    public List<HubJpaModel> hubs;

    public UserJpaModel(){

    }

    public UserJpaModel(String id, String email, String name, String password, Instant createdAt, List<HubJpaModel> hubs) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.createdAt = createdAt;
        this.hubs = hubs;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public List<HubJpaModel> getHubs() {
        return hubs;
    }

    public void addHub(HubJpaModel hub) {
        this.hubs.add(hub);
    }

    public void enterHub(HubJpaModel hub){
            if (!hubs.contains(hub)) {
                hubs.add(hub);
                hub.addUser(this);
            }
    }
}
