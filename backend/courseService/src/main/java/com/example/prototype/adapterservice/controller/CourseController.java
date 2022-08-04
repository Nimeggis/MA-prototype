package com.example.prototype.adapterservice.controller;

import com.example.prototype.adapterservice.DTO.Course;
import com.example.prototype.adapterservice.model.CourseModel;
import com.example.prototype.adapterservice.service.CourseService;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@Controller
public class CourseController {

    private CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    // REST GET
    // get all courses
    @GetMapping(value = "/getAll")
    public ResponseEntity<List<CourseModel>> getAll() {
        return ResponseEntity.ok(courseService.getAllCourses());
    }

    // REST GET
    // get course information by course ID
    @GetMapping(value = "/getCourse/{courseId}")
    public ResponseEntity<CourseModel> getCourse(@PathVariable int courseId) {
        return ResponseEntity.ok(courseService.getCourseInfo(courseId));
    }

    // REST GET
    // get in course installed adapter
    @GetMapping(value = "/getInstalledAdapter/{courseId}")
    public ResponseEntity<String> getInstalledAdapter(@PathVariable int courseId) {
        return ResponseEntity.ok(courseService.getInstalledAdapter(courseId));
    }

    // REST POST
    // create course with form values
    @PostMapping(value = "/createCourse")
    public ResponseEntity<CourseModel> createCourse(@RequestBody Course course) {
        course.setCourseAdapter(courseService.getAdapterIDs(course.getCourseAdapter()));
        return ResponseEntity.ok(courseService.createCourse(course));
    }

    // REST DELETE
    // delete course by course ID
    @DeleteMapping(value = "/deleteCourse/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable int id) {
        courseService.deleteCourse(id);
        return ResponseEntity.ok(courseService.getAllCourses().toString());
    }

    // REST PUT
    // update installed adapters when adapters are installed/uninstalled
    @PutMapping(value = "/updateCourse/{id}/{courseAdapter}")
    public ResponseEntity<CourseModel> updateCourseAdapter(@PathVariable int id, @PathVariable String courseAdapter) {
        courseService.updateAdapter(id, courseAdapter);
        return ResponseEntity.ok(courseService.getCourseInfo(id));
    }
}
