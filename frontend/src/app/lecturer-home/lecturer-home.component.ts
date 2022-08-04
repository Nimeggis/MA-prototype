import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { Courses, DataService } from '../utils/http/data.service';

@Component({
  selector: 'app-lecturer-home',
  templateUrl: './lecturer-home.component.html',
  styleUrls: ['./lecturer-home.component.css']
})
export class LecturerHomeComponent implements OnInit {

  // initialization of variables
  courseList: Courses[] = [];

  // constructor
  constructor(private titleService: Title, private data: DataService) {
    this.titleService.setTitle("IT-REX Prototype - Lecturer Home");
  }

  // execute function when loading component
  ngOnInit(): void {
    this.data.getCoursesConsole().subscribe(result => {
      // get all courses
      this.courseList = result;
    });
  }

}
