import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Courses, CourseTimeConfig, DataService } from 'src/app/utils/http/data.service';

@Component({
  selector: 'app-adapter-home',
  templateUrl: './adapter-home.component.html',
  styleUrls: ['./adapter-home.component.css']
})
export class CourseAdapterHomeComponent implements OnInit {
  // initialization of variables
  // info variables
  courseInfo: Courses | undefined;
  courseId: Number = 0;
  courseConfig: CourseTimeConfig | undefined;

  // linking variables
  linkedAdapter: String[] = [];
  linkedAdapterNames: String[] = [];

  // constructor
  constructor(private titleService: Title, private route: ActivatedRoute, private data: DataService) {
    this.titleService.setTitle("IT-REX Prototype - Course Timeline");
  }

  // execute function when loading component
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      // get courseId
      this.courseId = params['id'];
      this.data.getCourseInfo(this.courseId).subscribe(courseInfo => {
        // get courseInfo from courseId
        this.courseInfo = courseInfo;
        this.data.getConfigCourse(this.courseId).subscribe(courseConfig => {
          // get adapter configuration from courseId
          this.courseConfig = courseConfig;
          this.linkedAdapter = this.courseConfig.linkedAdapter.split(",");
          for(let adapter of this.linkedAdapter){
            if(adapter != "0"){
              this.data.getAdapterInfo(adapter).subscribe(adapterInfo => {
                // get linked adapter of Course Timeline
                this.linkedAdapterNames.push(adapterInfo.adapterName);
              })
            }
          }
        });
      });
    });
  }
}
