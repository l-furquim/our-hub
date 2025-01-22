package ourhub.api.dtos;

public class FeaturedHubDto{

    private String id;
    private String name;
    private Long userCount;
    private String userId;
    private boolean isLoggedUserIn;

    public FeaturedHubDto(String id, String name, Long userCount, String userId, boolean isLoggedUserIn) {
        this.id = id;
        this.name = name;
        this.userCount = userCount;
        this.userId = userId;
        this.isLoggedUserIn = isLoggedUserIn;
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

    public Long getUserCount() {
        return userCount;
    }

    public void setUserCount(Long userCount) {
        this.userCount = userCount;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public boolean isLoggedUserIn() {
        return isLoggedUserIn;
    }

    public void setLoggedUserIn(boolean loggedUserIn) {
        isLoggedUserIn = loggedUserIn;
    }
}
