package ourhub.api.domains.entities;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.Instant;
import java.util.Collection;
import java.util.List;

public class User implements UserDetails {

    private String id;
    private String email;
    private String name;
    private String password;
    private Instant createdAt;

    private User(String id, String email, String name, String password, Instant createdAt) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.createdAt = createdAt;
        this.validate();
    }

    public static User build(String id, String email, String name, String password, Instant createdAt){
        return new User(
                id,
                email,
                name,
                password,
                createdAt
        );
    }

    private void validate(){
        if(!email.contains("@") || email.isBlank()){
            throw new IllegalArgumentException("Email invalid for register");
        }

        if(name.isBlank()){
            throw new IllegalArgumentException("Name invalid for register, cannot be blank");
        }

        if(password.isEmpty() || password.length() < 5){
            throw new IllegalArgumentException("Password invalid for register, need to have at least 5 chars and cannot be empty");
        }
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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("USER"));
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return this.email;
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
}
