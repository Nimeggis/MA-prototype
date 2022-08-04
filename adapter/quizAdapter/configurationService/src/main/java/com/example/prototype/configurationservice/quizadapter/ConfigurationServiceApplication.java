package com.example.prototype.configurationservice.quizadapter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
public class ConfigurationServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ConfigurationServiceApplication.class, args);
    }

    // Bean for REST communication with adapterService
    @Bean
    public WebClient adapterWebClient (){
        return WebClient.create("http://localhost:8081");
    }
}
