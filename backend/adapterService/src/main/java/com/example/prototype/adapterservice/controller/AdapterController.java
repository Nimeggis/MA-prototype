package com.example.prototype.adapterservice.controller;

import com.example.prototype.adapterservice.model.AdapterModel;
import com.example.prototype.adapterservice.service.AdapterService;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@Controller
public class AdapterController {

    private AdapterService adapterService;

    // constructor
    public AdapterController(AdapterService adapterService) {
        this.adapterService = adapterService;
    }

    // REST GET
    // get all adapters from DB and return as list
    @GetMapping(value = "/getAll")
    public ResponseEntity<List<AdapterModel>> getAll() {
        return ResponseEntity.ok(adapterService.getAll());
    }

    // REST GET
    // get IDs of adapters from DB and return as IDs as CSV (String)
    @GetMapping(value = "/getIDs/{adapter}")
    public ResponseEntity<String> getIDs(@PathVariable String adapter){
        return ResponseEntity.ok(adapterService.getIDs(adapter));
    }

    // REST GET
    // get information of adapter from DB by ID and return as AdapterModel
    @GetMapping(value = "/getAdapter/{adapterId}")
    public ResponseEntity<Optional<AdapterModel>> getAdapterName(@PathVariable int adapterId){
        return ResponseEntity.ok(adapterService.getName(adapterId));
    }

    // REST PUT
    // link two adapters with each other
    // one adapter wants to connect to another, sends a request to adapterService and this function forwards the request to the respective adapter
    // and connect the adapter also the other way
    @PutMapping(value = "/manageLink/{courseId}/{adapterSend}/{addOrDel}/{adapterRec}")
    public ResponseEntity<String> manageLinks(@PathVariable int courseId, @PathVariable String adapterSend, @PathVariable String addOrDel, @PathVariable int adapterRec){
        return ResponseEntity.ok(adapterService.manageLink(courseId, adapterSend, addOrDel, adapterRec));
    }
}
