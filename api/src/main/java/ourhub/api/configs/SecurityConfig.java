package ourhub.api.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import ourhub.api.configs.filter.SecurityFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    SecurityFilter securityFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        return http.cors(cors -> {
//                    CorsConfiguration config = new CorsConfiguration();
//                    config.addAllowedOrigin("http://localhost:3000");
//                    config.addAllowedMethod("*");
//                    config.addAllowedHeader("*");
//
//                    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//
//                    source.registerCorsConfiguration("/**", config);
//
//                    CorsFilter corsFilter = new CorsFilter(source);
//
//                    http.addFilterBefore(corsFilter, CorsFilter.class);
//                })
//                .csrf(csrf -> csrf.disable())
//                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                .authorizeHttpRequests(authorize -> authorize
//                        .requestMatchers("/", "/index.html", "/resources/static/**", "/ws/**").permitAll())
//                .authorizeHttpRequests(authorize -> authorize.requestMatchers(HttpMethod.POST, "hub/new").permitAll())
//                .authorizeHttpRequests(authorize -> authorize.requestMatchers(HttpMethod.POST, "user/login").permitAll())
//                .authorizeHttpRequests(authorize -> authorize.requestMatchers(HttpMethod.POST, "user/register").permitAll())
//                .authorizeHttpRequests(authorize -> authorize.anyRequest()
//                        .authenticated())
//                .addFilterBefore(this.securityFilter, UsernamePasswordAuthenticationFilter.class)
//                .build();
        return http
                .cors(cors ->{
                    CorsConfiguration config = new CorsConfiguration();
                    config.addAllowedOrigin("*");
                    config.addAllowedMethod("*");
                    config.addAllowedHeader("*");
                    config.setAllowCredentials(false);

                    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

                    source.registerCorsConfiguration("/**", config);
                    CorsFilter corsFilter = new CorsFilter(source);

                    http.addFilterBefore(corsFilter, CorsFilter.class);


                })
                .csrf(csrf -> csrf.disable())  // Desabilita CSRF
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))  // Desabilita o gerenciamento de sessão
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().permitAll()  // Permite todas as requisições sem autenticação
                )
                .build();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
