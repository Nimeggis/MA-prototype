package com.example.prototype.configurationservice.flashcardadapter.controller;

import com.example.prototype.configurationservice.flashcardadapter.DTO.FlashcardConfiguration;
import com.example.prototype.configurationservice.flashcardadapter.model.ConfigurationModel;
import com.example.prototype.configurationservice.flashcardadapter.service.ConfigurationService;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
public class configurationController {

    private ConfigurationService configurationService;

    // constructor
    public configurationController(ConfigurationService configurationService) {
        this.configurationService = configurationService;
    }

    // REST GET
    // get adapter configuration for specific course
    @GetMapping(value = "/getConfig/{courseId}")
    public ResponseEntity<ConfigurationModel> getConfig(@PathVariable int courseId) {
        return ResponseEntity.ok(configurationService.getConfiguration(courseId));
    }

    // REST POST
    // create initial adapter configuration with default values
    @PostMapping(value = "/createConfig/{courseId}")
    public ResponseEntity<ConfigurationModel> createConfig(@PathVariable int courseId){
        configurationService.createConfiguration(courseId);
        return ResponseEntity.ok(configurationService.getConfiguration(courseId));
    }

    // REST DELETE
    // delete adapter configuration
    @DeleteMapping(value = "/deleteConfig/{courseId}")
    public ResponseEntity<ConfigurationModel> deleteConfig(@PathVariable int courseId){
        configurationService.deleteConfiguration(courseId);
        return ResponseEntity.ok(configurationService.getConfiguration(courseId));
    }

    // REST PUT
    // receive a request of another adapter to link and add it to linked adapter
    @PutMapping(value = "/setAdapter/{courseId}/{adapterIds}")
    public ResponseEntity<ConfigurationModel> setAdapter(@PathVariable int courseId, @PathVariable String adapterIds) {
        configurationService.setAdapterConfig(courseId, adapterIds);
        return ResponseEntity.ok(configurationService.getConfiguration(courseId));
    }

    // REST PUT
    // update adapter configuration with new values
    @PutMapping(value = "/updateAdapter/{courseId}")
    public ResponseEntity<ConfigurationModel> updateConfig(@PathVariable int courseId, @RequestBody FlashcardConfiguration configuration) {
        configurationService.updateConfiguration(courseId, configuration);
        return ResponseEntity.ok(configurationService.getConfiguration(courseId));
    }

    // REST PUT
    // link another adapter with flashcards adapter
    @PutMapping(value = "/addAdapter/{courseId}/{adapterId}")
    public ResponseEntity<String> addAdapter(@PathVariable int courseId, @PathVariable int adapterId){
        configurationService.addAdapter(courseId, adapterId);
        return ResponseEntity.ok("ok");
    }

    // REST PUT
    // unlink another adapter from flashcards adapter
    @PutMapping(value = "/delAdapter/{courseId}/{adapterId}")
    public ResponseEntity<String> delAdapter(@PathVariable int courseId, @PathVariable int adapterId){
        configurationService.delAdapter(courseId, adapterId);
        return ResponseEntity.ok("ok");
    }
}
