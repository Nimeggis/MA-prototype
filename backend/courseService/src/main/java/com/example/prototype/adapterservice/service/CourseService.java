package com.example.prototype.adapterservice.service;

import com.example.prototype.adapterservice.DTO.Course;
import com.example.prototype.adapterservice.model.CourseModel;
import com.example.prototype.adapterservice.repository.CourseRepository;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
public class CourseService {

    // initialization of variables
    // initialize WebClients
    private final WebClient webClient;

    private CourseRepository courseRepository;

    // constructor
    public CourseService(CourseRepository courseRepository, WebClient webClient) {
        this.webClient = webClient;
        this.courseRepository = courseRepository;
    }

    // constructor
    public List<CourseModel> getAllCourses() {
        return courseRepository.findAll();
    }

    // get course information by course ID
    public CourseModel getCourseInfo(Integer courseID) {
        return courseRepository.findById(courseID).get();
    }

    // create course with form values
    public CourseModel createCourse(Course course) {
        return courseRepository.save(new CourseModel( course.getCourseName(), course.getCourseDescription(), course.getCourseStart(), course.getCourseEnd(), course.getCourseAdapter(), course.getFieldofstudy()));
    }

    // REST communication with adapterService
    // get adapter IDs from adapter names
    public String getAdapterIDs(String adapterList) {
        String response = this.webClient.get().uri("/getIDs/"+adapterList).retrieve().bodyToMono(String.class).block();
        return response;
    }

    // get in course installed adapter
    public String getInstalledAdapter(int courseId) {
        return courseRepository.findInstalledAdapter(courseId);
    }

    // delete course by course ID
    public void deleteCourse(Integer id) {
        courseRepository.deleteById(id);
    }

    // update installed adapters when adapters are installed/uninstalled
    public void updateAdapter(Integer id, String adapter) {
        adapter = adapter.replace("-",",");
        courseRepository.updateAdapter(adapter, id);
    }
}
