package com.example.prototype.configurationservice.videoadapter.service;

import com.example.prototype.configurationservice.videoadapter.DTO.VideoConfiguration;
import com.example.prototype.configurationservice.videoadapter.model.ConfigurationModel;
import com.example.prototype.configurationservice.videoadapter.repository.ConfigurationRepository;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ConfigurationService {

    // initialization of variables
    // initialize WebClients
    private final WebClient adapterWebClient;

    private ConfigurationRepository configurationRepository;

    // constructor
    public ConfigurationService(ConfigurationRepository configurationRepository, WebClient adapterWebClient) {
        this.adapterWebClient = adapterWebClient;
        this.configurationRepository = configurationRepository;
    }

    // get adapter configuration for specific course
    public ConfigurationModel getConfiguration(int courseId) {
        return configurationRepository.getConfig(courseId);
    }

    // create initial adapter configuration with default value
    public void createConfiguration(int courseId) {
        configurationRepository.createConfig(courseId);
    }

    // delete adapter configuration
    public void deleteConfiguration(int courseId) {
        configurationRepository.deleteConfig(courseId);
    }

    // link another adapter with video upload adapter
    public void addAdapter(int courseId, int adapterId) {
        String adapterIds = getConfiguration(courseId).getLinkedAdapter();
        if(!adapterIds.contains(""+adapterId)){
            adapterIds = adapterIds+","+adapterId;
        }
        configurationRepository.setAdapterConfig(courseId, adapterIds);
    }

    // unlink another adapter from video upload adapter
    public void delAdapter(int courseId, int adapterId) {
        String adapterIds = getConfiguration(courseId).getLinkedAdapter();
        if(adapterIds.contains(""+adapterId)){
            adapterIds = adapterIds.replace(""+adapterId, "");
            adapterIds = adapterIds.replace(",,", ",");
            adapterIds = adapterIds.startsWith(",") ? adapterIds.substring(1) : adapterIds;
            adapterIds = adapterIds.endsWith(",") ? adapterIds.substring(0, adapterIds.length()-1) : adapterIds;
        }
        configurationRepository.setAdapterConfig(courseId, adapterIds);
    }

    // receive a request of another adapter to link and add it to linked adapter
    public void setAdapterConfig(int courseId, String adapterIds) {
        adapterIds = adapterIds.replace("-",",");
        ConfigurationModel isConfig = getConfiguration(courseId);
        List<String> newAdapter = new ArrayList<String>(Arrays.asList(adapterIds.split(",")));
        List<String> oldAdapter = new ArrayList<String>(Arrays.asList(isConfig.getLinkedAdapter().split(",")));
        List<String> addAdapter = new ArrayList<String>(newAdapter);
        List<String> delAdapter = new ArrayList<String>(oldAdapter);;
        delAdapter.removeAll(newAdapter);
        addAdapter.removeAll(oldAdapter);
        if(!delAdapter.isEmpty()){
            String response = this.adapterWebClient.put().uri("/manageLink/"+courseId+"/Video Upload/del/"+delAdapter.get(0)).retrieve().bodyToMono(String.class).block();
        } else if(!addAdapter.isEmpty()){
            String response = this.adapterWebClient.put().uri("/manageLink/"+courseId+"/Video Upload/add/"+addAdapter.get(0)).retrieve().bodyToMono(String.class).block();
        }
        configurationRepository.setAdapterConfig(courseId, adapterIds);
    }

    // update adapter configuration with new values
    public void updateConfiguration(int courseId, VideoConfiguration configuration) {
        configurationRepository.updateConfig(courseId, configuration.isDisplayedDash(), configuration.isAccessVideo(), configuration.isSkipVideo(), configuration.isPauseVideo());
    }
}
