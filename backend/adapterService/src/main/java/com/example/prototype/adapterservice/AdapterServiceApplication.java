package com.example.prototype.adapterservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
public class AdapterServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdapterServiceApplication.class, args);
	}

	// Bean for REST communication with course adapter
	@Bean
	public WebClient courseAdapterWebClient (){
		return WebClient.create("http://localhost:8091");
	}

	// Bean for REST communication with flashcards adapter
	@Bean
	public WebClient flashcardsAdapterWebClient (){
		return WebClient.create("http://localhost:8093");
	}

	// Bean for REST communication with gamification adapter
	@Bean
	public WebClient gamificationAdapterWebClient (){
		return WebClient.create("http://localhost:8095");
	}

	// Bean for REST communication with knowledge progress adapter
	@Bean
	public WebClient knowledgeAdapterWebClient (){
		return WebClient.create("http://localhost:8097");
	}

	// Bean for REST communication with quiz adapter
	@Bean
	public WebClient quizAdapterWebClient (){
		return WebClient.create("http://localhost:8099");
	}

	// Bean for REST communication with video adapter
	@Bean
	public WebClient videoAdapterWebClient (){
		return WebClient.create("http://localhost:8101");
	}

	// Bean for REST communication with matching exercise adapter
	@Bean
	public WebClient matchingAdapterWebClient (){
		return WebClient.create("http://localhost:8103");
	}
}
