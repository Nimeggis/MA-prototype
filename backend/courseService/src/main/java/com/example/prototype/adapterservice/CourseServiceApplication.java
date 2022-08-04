package com.example.prototype.adapterservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
public class CourseServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CourseServiceApplication.class, args);
	}

	// Bean for REST communication with adapterService
	@Bean
	public WebClient localWebClient (){
		return WebClient.create("http://localhost:8081");
	}

}
