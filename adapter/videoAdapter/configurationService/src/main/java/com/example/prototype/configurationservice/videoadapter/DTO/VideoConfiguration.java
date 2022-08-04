package com.example.prototype.configurationservice.videoadapter.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VideoConfiguration {
    private boolean displayedDash;
    private boolean accessVideo;
    private boolean skipVideo;
    private boolean pauseVideo;
}
