import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Adapter, Courses, DataService } from '../utils/http/data.service';

@Component({
  selector: 'app-adapter-overview',
  templateUrl: './adapter-overview.component.html',
  styleUrls: ['./adapter-overview.component.css']
})
export class AdapterOverviewComponent implements OnInit {

  // initialization of variables
  // info variables
  courseInfo: Courses | undefined;
  courseId: Number = 0;
  adapterName: String = "";
  adapterInfo: Adapter | undefined;

  // constructor
  constructor(private titleService: Title, private data: DataService, private route: ActivatedRoute, private router: Router) {
    this.titleService.setTitle("IT-REX Prototype - Adapter Overview");
  }

  // execute function when loading component
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      // get courseId
      this.courseId = params['id'];
      this.adapterName = params['adapter'];
      this.data.getCourseInfo(this.courseId).subscribe(courseInf => {
        // get courseInfo from courseId
        this.courseInfo = courseInf;
      });
      this.data.getAdapterIds(this.adapterName).subscribe(adapterId => {
        // get adapterId of adaptername
        this.data.getAdapterInfo(adapterId).subscribe(adapterInf => {
          // get adapterInfo from adapterId
          this.adapterInfo = adapterInf;
        });
      });
    });
  }

}
