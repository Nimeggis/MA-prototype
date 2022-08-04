package com.example.prototype.adapterservice.service;

import com.example.prototype.adapterservice.model.AdapterModel;
import com.example.prototype.adapterservice.repository.AdapterRepository;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Optional;

@Service
public class AdapterService {

    // initialization of variables
    // initialize WebClients
    private final WebClient courseAdapterWebClient;
    private final WebClient flashcardsAdapterWebClient;
    private final WebClient gamificationAdapterWebClient;
    private final WebClient knowledgeAdapterWebClient;
    private final WebClient quizAdapterWebClient;
    private final WebClient videoAdapterWebClient;
    private final WebClient matchingAdapterWebClient;

    private AdapterRepository adapterRepository;

    // constructor
    public AdapterService(AdapterRepository adapterRepository, WebClient courseAdapterWebClient, WebClient flashcardsAdapterWebClient, WebClient gamificationAdapterWebClient, WebClient knowledgeAdapterWebClient, WebClient quizAdapterWebClient, WebClient videoAdapterWebClient, WebClient matchingAdapterWebClient) {
        this.courseAdapterWebClient = courseAdapterWebClient;
        this.flashcardsAdapterWebClient = flashcardsAdapterWebClient;
        this.gamificationAdapterWebClient = gamificationAdapterWebClient;
        this.knowledgeAdapterWebClient = knowledgeAdapterWebClient;
        this.quizAdapterWebClient = quizAdapterWebClient;
        this.videoAdapterWebClient = videoAdapterWebClient;
        this.matchingAdapterWebClient = matchingAdapterWebClient;
        this.adapterRepository = adapterRepository;
    }

    // get all adapters from DB and return as list
    public List<AdapterModel> getAll() {
        return adapterRepository.findAll();
    }

    // get IDs of adapters from DB and return as IDs as CSV (String)
    public String getIDs(String adapter) {
        String[] adapterList = adapter.split("\\-", -1);
        for (int i = 0; i < adapterList.length; i++) {
            adapterList[i] = adapterRepository.findByAdapterName(adapterList[i]);
        }
        String idList = String.join(",", adapterList);
        return idList;
    }

    // link two adapters with each other
    // one adapter wants to connect to another, sends a request to adapterService and this function forwards the request to the respective adapter
    // and connect the adapter also the other way
    public String manageLink(int courseId, String adapterSend, String addOrDel, int adapterRec) {
        if(addOrDel.equals("add")){
            addAdapter(courseId, adapterSend, adapterRec);
        } else if(addOrDel.equals("del")) {
            delAdapter(courseId, adapterSend, adapterRec);
        }
        return "ok";
    }

    // get information of adapter from DB by ID and return as AdapterModel
    public Optional<AdapterModel> getName(int adapterId) {
        return adapterRepository.findById(adapterId);
    }

    // function if adapter wants to link to another adapter
    public void addAdapter(int courseId, String adapter, int adapterRec){
        adapter = getIDs(adapter);
        String adapterName = getName(adapterRec).get().getAdapterName();
        if(adapterName.equals("Course Timeline")){
            this.courseAdapterWebClient.put().uri("/addAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        } else if(adapterName.equals("Flashcards")){
            this.flashcardsAdapterWebClient.put().uri("/addAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        } else if(adapterName.equals("Gamification")) {
            this.gamificationAdapterWebClient.put().uri("/addAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        } else if(adapterName.equals("Knowledge Progress")) {
            this.knowledgeAdapterWebClient.put().uri("/addAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        } else if(adapterName.equals("Quiz Upload")) {
            this.quizAdapterWebClient.put().uri("/addAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        } else if(adapterName.equals("Video Upload")) {
            this.videoAdapterWebClient.put().uri("/addAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        } else if(adapterName.equals("Matching Exercise")) {
            this.matchingAdapterWebClient.put().uri("/addAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        }
    }

    // function if adapter wants to unlink with another adapter
    public void delAdapter(int courseId, String adapter, int adapterRec){
        adapter = getIDs(adapter);
        String adapterName = getName(adapterRec).get().getAdapterName();
        if(adapterName.equals("Course Timeline")){
            this.courseAdapterWebClient.put().uri("/delAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        } else if(adapterName.equals("Flashcards")){
            this.flashcardsAdapterWebClient.put().uri("/delAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        } else if(adapterName.equals("Gamification")) {
            this.gamificationAdapterWebClient.put().uri("/delAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        } else if(adapterName.equals("Knowledge Progress")) {
            this.knowledgeAdapterWebClient.put().uri("/delAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        } else if(adapterName.equals("Quiz Upload")) {
            this.quizAdapterWebClient.put().uri("/delAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        } else if(adapterName.equals("Video Upload")) {
            this.videoAdapterWebClient.put().uri("/delAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        } else if(adapterName.equals("Matching Exercise")) {
            this.matchingAdapterWebClient.put().uri("/delAdapter/"+courseId+"/"+adapter).retrieve().bodyToMono(String.class).block();
        }
    }

}
