package ourhub.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiApplication {

	public static void main(String[] args) {
		System.out.println("Server is running in 8080 port...");
		SpringApplication.run(ApiApplication.class, args);
	}

}
