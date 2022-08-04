import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormBuilder} from '@angular/forms';
import { CourseForm, DataService } from '../utils/http/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  // initialization of variables
  // info variables
  selectedAdapter : string[] = [];
  courseId:number = 0;
  courseAdapter = '';

  // adapter suggestions variables
  displaySprachwissenschaft = 'none';
  displayInformatik = 'none';
  inputSelect:String = "choose";

  // select HTML Elements for adapter lists
  courseElements = document.getElementsByClassName("course");
  flashcardsElements = document.getElementsByClassName("flashcards");
  gamificationElements = document.getElementsByClassName("gamification");
  knowledgeElements = document.getElementsByClassName("knowledge");
  quizElements = document.getElementsByClassName("quiz");
  videoElements = document.getElementsByClassName("video");
  matchingElements = document.getElementsByClassName("matching");

  // form for input fields
  checkoutForm = this.formBuilder.group({
    courseName: '',
    courseDescription: '',
    courseStart: '',
    courseEnd: '',
    courseAdapter: '',
    fieldofstudy: ''
  });

  // constructor
  constructor(private titleService: Title, private data:DataService, private formBuilder: FormBuilder, private route:Router) {
    this.titleService.setTitle("IT-REX Prototype - Create Course");
  }

  // execute function when loading component
  ngOnInit(): void {
  }

  // submit and create course
  submitCourse() {
    this.courseAdapter = this.selectedAdapter.join("-");
    const courseDetails: CourseForm = { courseName: this.checkoutForm.value.courseName, courseDescription: this.checkoutForm.value.courseDescription, courseStart: new Date(2020, 4, 1), courseEnd: new Date(2022, 10, 1), courseAdapter: this.courseAdapter, fieldofstudy: this.checkoutForm.value.fieldofstudy}
    this.data.createCourse(courseDetails).subscribe(result=>{
      // create course with input values
      this.courseId=result.id;
      // install adapter in course and create configurations of adapters
      for(let adapter of this.selectedAdapter){
        this.createAdapterConfig(adapter);
      }
      this.route.navigate(['/lecturer-dashboard/course/'+result.id]);
    });
  }

  // open adapter suggestions depending on field of study
  onChange(fieldOfStudy: string) {
    if (fieldOfStudy == "Sprachwissenschaft") {
      this.displaySprachwissenschaft = 'flex';
      this.displayInformatik = 'none';
    } else if (fieldOfStudy == "Informatik" || fieldOfStudy == "Softwaretechnik") {
      this.displaySprachwissenschaft = 'none';
      this.displayInformatik = 'flex';
    } else {
      this.displaySprachwissenschaft = 'none';
      this.displayInformatik = 'none';
    }
  }

  // select adapter when clicked, unselect when clicked again
  // save adapter in a list which need to be installed on submission
  clickEvent(element: String) {
    // Course Timeline
    if(element === "Course Timeline") {
      if(this.selectedAdapter.includes(element.toString())){
        const index: number = this.selectedAdapter.indexOf(element.toString());
        this.selectedAdapter.splice(index, 1);
        for(let i=0; i<this.courseElements.length; i++){
          this.courseElements[i].classList.remove("active");
        }
      } else {
        this.selectedAdapter.push(element.toString());
        for(let i=0; i<this.courseElements.length; i++){
          this.courseElements[i].classList.add("active");
        }
      }
    // Flashcards
    } else if (element === "Flashcards") {
      if(this.selectedAdapter.includes(element.toString())){
        const index: number = this.selectedAdapter.indexOf(element.toString());
        this.selectedAdapter.splice(index, 1);
        for(let i=0; i<this.flashcardsElements.length; i++){
          this.flashcardsElements[i].classList.remove("active");
        }
      } else {
        this.selectedAdapter.push(element.toString());
        for(let i=0; i<this.flashcardsElements.length; i++){
          this.flashcardsElements[i].classList.add("active");
        }
      }
    // Gamification
    } else if (element === "Gamification") {
      if(this.selectedAdapter.includes(element.toString())){
        const index: number = this.selectedAdapter.indexOf(element.toString());
        this.selectedAdapter.splice(index, 1);
        for(let i=0; i<this.gamificationElements.length; i++){
          this.gamificationElements[i].classList.remove("active");
        }
      } else {
        this.selectedAdapter.push(element.toString());
        for(let i=0; i<this.gamificationElements.length; i++){
          this.gamificationElements[i].classList.add("active");
        }
      }
    // Knowledge Progress
    } else if (element === "Knowledge Progress") {
      if(this.selectedAdapter.includes(element.toString())){
        const index: number = this.selectedAdapter.indexOf(element.toString());
        this.selectedAdapter.splice(index, 1);
        for(let i=0; i<this.knowledgeElements.length; i++){
          this.knowledgeElements[i].classList.remove("active");
        }
      } else {
        this.selectedAdapter.push(element.toString());
        for(let i=0; i<this.knowledgeElements.length; i++){
          this.knowledgeElements[i].classList.add("active");
        }
      }
    // Quiz Upload
    } else if (element === "Quiz Upload") {
      if(this.selectedAdapter.includes(element.toString())){
        const index: number = this.selectedAdapter.indexOf(element.toString());
        this.selectedAdapter.splice(index, 1);
        for(let i=0; i<this.quizElements.length; i++){
          this.quizElements[i].classList.remove("active");
        }
      } else {
        this.selectedAdapter.push(element.toString());
        for(let i=0; i<this.quizElements.length; i++){
          this.quizElements[i].classList.add("active");
        }
      }
    // Video Upload
    } else if (element === "Video Upload") {
      if(this.selectedAdapter.includes(element.toString())){
        const index: number = this.selectedAdapter.indexOf(element.toString());
        this.selectedAdapter.splice(index, 1);
        for(let i=0; i<this.videoElements.length; i++){
          this.videoElements[i].classList.remove("active");
        }
      } else {
        this.selectedAdapter.push(element.toString());
        for(let i=0; i<this.videoElements.length; i++){
          this.videoElements[i].classList.add("active");
        }
      }
    // Matching Exercise
    } else if (element === "Matching Exercise") {
      if(this.selectedAdapter.includes(element.toString())){
        const index: number = this.selectedAdapter.indexOf(element.toString());
        this.selectedAdapter.splice(index, 1);
        for(let i=0; i<this.matchingElements.length; i++){
          this.matchingElements[i].classList.remove("active");
        }
      } else {
        this.selectedAdapter.push(element.toString());
        for(let i=0; i<this.matchingElements.length; i++){
          this.matchingElements[i].classList.add("active");
        }
      }
    }
  }

  // create configuration of installed adapter
  createAdapterConfig(adapterName:String) {
    if(adapterName == "Video Upload"){
      this.data.createConfigVideo(this.courseId).subscribe();
    } else if (adapterName == "Course Timeline") {
      this.data.createConfigCourse(this.courseId).subscribe();
    } else if (adapterName == "Quiz Upload") {
      this.data.createConfigQuiz(this.courseId).subscribe();
    } else if (adapterName == "Knowledge Progress") {
      this.data.createConfigKnowledge(this.courseId).subscribe();
    } else if (adapterName == "Flashcards") {
      this.data.createConfigFlashcards(this.courseId).subscribe();
    } else if (adapterName == "Gamification") {
      this.data.createConfigGamification(this.courseId).subscribe();
    } else if (adapterName == "Matching Exercise") {
      this.data.createConfigMatching(this.courseId).subscribe();
    }
  }
}
