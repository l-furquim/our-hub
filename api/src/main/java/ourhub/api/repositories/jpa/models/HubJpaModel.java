package ourhub.api.repositories.jpa.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name = "hub")
@Table(name = "hub")
public class HubJpaModel {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "name")
    private String name;

    public HubJpaModel(){

    }

    public HubJpaModel(final String id, final String name){
        this.id = id;
        this.name = name;
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
