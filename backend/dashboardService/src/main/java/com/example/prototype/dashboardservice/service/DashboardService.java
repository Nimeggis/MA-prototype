package com.example.prototype.dashboardservice.service;

import com.example.prototype.dashboardservice.model.AdapterDashModel;
import com.example.prototype.dashboardservice.model.AdapterModel;
import com.example.prototype.dashboardservice.model.DashboardModel;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;

@Service
public class DashboardService {

    // initialization of variables
    // initialize WebClients
    private final WebClient adapterWebClient;
    private final WebClient courseServiceWebClient;
    private final WebClient courseAdapterWebClient;
    private final WebClient flashcardsAdapterWebClient;
    private final WebClient gamificationAdapterWebClient;
    private final WebClient knowledgeAdapterWebClient;
    private final WebClient quizAdapterWebClient;
    private final WebClient videoAdapterWebClient;
    private final WebClient matchingAdapterWebClient;

    // constructor
    public DashboardService(WebClient courseServiceWebClient, WebClient courseAdapterWebClient, WebClient flashcardsAdapterWebClient, WebClient gamificationAdapterWebClient, WebClient knowledgeAdapterWebClient, WebClient quizAdapterWebClient, WebClient videoAdapterWebClient, WebClient adapterWebClient, WebClient matchingAdapterWebClient) {
        this.adapterWebClient = adapterWebClient;
        this.courseServiceWebClient = courseServiceWebClient;
        this.courseAdapterWebClient = courseAdapterWebClient;
        this.flashcardsAdapterWebClient = flashcardsAdapterWebClient;
        this.gamificationAdapterWebClient = gamificationAdapterWebClient;
        this.knowledgeAdapterWebClient = knowledgeAdapterWebClient;
        this.quizAdapterWebClient = quizAdapterWebClient;
        this.videoAdapterWebClient = videoAdapterWebClient;
        this.matchingAdapterWebClient = matchingAdapterWebClient;
    }

    // get adapter of course which are enabled as dashboard widget
    public List<DashboardModel> getDashAdapter(int courseId) {

        // initialization of variables
        String installedAdapter = this.courseServiceWebClient.get().uri("/getInstalledAdapter/"+courseId).retrieve().bodyToMono(String.class).block();
        String[] adapterList = installedAdapter.split(",");
        AdapterModel[] allAdapterList =  this.adapterWebClient.get().uri("/getAll").retrieve().bodyToMono(AdapterModel[].class).block();
        List<DashboardModel> dashboardAdapter = new ArrayList<DashboardModel>();
        int index = 0;

        // loop to get all installed adapter and then all of them which are enabled as dashboard widget
        for(String adapterId : adapterList) {
            for(AdapterModel adapter : allAdapterList) {
                if (adapter.getID() == Integer.parseInt(adapterId)) {
                    adapterList[index] = adapter.getAdapterName();
                    break;
                }
            }
            // save as adapter list to return to frontend
            if(adapterList[index].equals("Gamification")){
                AdapterDashModel tmpDash = this.gamificationAdapterWebClient.get().uri("/getConfig/"+courseId).retrieve().bodyToMono(AdapterDashModel.class).block();
                if(tmpDash.isDisplayedDash())dashboardAdapter.add(new DashboardModel(adapterList[index], tmpDash.isDisplayedDash()));
            } else if(adapterList[index].equals("Video Upload")){
                AdapterDashModel tmpDash = this.videoAdapterWebClient.get().uri("/getConfig/"+courseId).retrieve().bodyToMono(AdapterDashModel.class).block();
                if(tmpDash.isDisplayedDash())dashboardAdapter.add(new DashboardModel(adapterList[index], tmpDash.isDisplayedDash()));
            } else if(adapterList[index].equals("Quiz Upload")){
                AdapterDashModel tmpDash = this.quizAdapterWebClient.get().uri("/getConfig/"+courseId).retrieve().bodyToMono(AdapterDashModel.class).block();
                if(tmpDash.isDisplayedDash())dashboardAdapter.add(new DashboardModel(adapterList[index], tmpDash.isDisplayedDash()));
            } else if(adapterList[index].equals("Course Timeline")){
                AdapterDashModel tmpDash = this.courseAdapterWebClient.get().uri("/getConfig/"+courseId).retrieve().bodyToMono(AdapterDashModel.class).block();
                if(tmpDash.isDisplayedDash())dashboardAdapter.add(new DashboardModel(adapterList[index], tmpDash.isDisplayedDash()));
            } else if(adapterList[index].equals("Flashcards")){
                AdapterDashModel tmpDash = this.flashcardsAdapterWebClient.get().uri("/getConfig/"+courseId).retrieve().bodyToMono(AdapterDashModel.class).block();
                if(tmpDash.isDisplayedDash())dashboardAdapter.add(new DashboardModel(adapterList[index], tmpDash.isDisplayedDash()));
            } else if(adapterList[index].equals("Knowledge Progress")){
                AdapterDashModel tmpDash = this.knowledgeAdapterWebClient.get().uri("/getConfig/"+courseId).retrieve().bodyToMono(AdapterDashModel.class).block();
                if(tmpDash.isDisplayedDash())dashboardAdapter.add(new DashboardModel(adapterList[index], tmpDash.isDisplayedDash()));
            } else if(adapterList[index].equals("Matching Exercise")){
                AdapterDashModel tmpDash = this.matchingAdapterWebClient.get().uri("/getConfig/"+courseId).retrieve().bodyToMono(AdapterDashModel.class).block();
                if(tmpDash.isDisplayedDash())dashboardAdapter.add(new DashboardModel(adapterList[index], tmpDash.isDisplayedDash()));
            }
            index++;
        }
        return dashboardAdapter;
    }

}
