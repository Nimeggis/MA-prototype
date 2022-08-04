import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {ChartConfiguration, ChartData, ChartEvent, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import { Courses, DataService } from '../utils/http/data.service';

@Component({
  selector: 'app-lecturer-dashboard',
  templateUrl: './lecturer-dashboard.component.html',
  styleUrls: ['./lecturer-dashboard.component.css']
})
export class LecturerDashboardComponent implements OnInit {

  // initialization of variables
  // info variables
  courseInfo: Courses | undefined;
  courseId: Number = 0;

  // adapter variables
  tmpAdapter : string[] | undefined = [];
  installedAdapter : string[] = [];
  contentAdapter : string[] = [];

  // constructor
  constructor(private titleService: Title, private data: DataService, private route: ActivatedRoute, private router: Router) {
    this.titleService.setTitle("IT-REX Prototype - Lecturer Dashboard");
  }

  // execute function when loading component
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.courseId = params['id'];
      this.data.getCourseInfo(this.courseId).subscribe(result => {
        this.courseInfo = result;
        this.getAdapterIdByCourse();
        this.getAdapterCreateContent();
      });
    });
  }

  // delete course
  delCourse() {
    this.data.deleteCourse(this.courseId).subscribe();
    this.router.navigate(["/lecturer-home"]);
  }

  // get adapter list
  getAdapterIdByCourse() {
    this.tmpAdapter = this.courseInfo?.courseAdapter.split(",", -1);
    // loop to get installed adapters
    for(let adapterId of this.tmpAdapter!){
      this.data.getAdapterInfo(adapterId).subscribe(result => {
        // get installed adapter and add to list
        this.installedAdapter.push(result.adapterName);
      });
   }
  }

  // get adapter for create content
  getAdapterCreateContent() {
    this.tmpAdapter = this.courseInfo?.courseAdapter.split(",", -1);
    // loop to get installed adapters
    for(let adapterId of this.tmpAdapter!){
      this.data.getAdapterInfo(adapterId).subscribe(result => {
        // get adapterInfo of each adapter
        // check if adapter can create content
        if(result.adapterCreateContent == true) {
          this.contentAdapter.push(result.adapterName);
        }
      });
   }
  }

  // open course configuration page
  toCourseConfig() {
    this.router.navigate(["/course-config/course/"+this.courseId]);
  }

  // students performance barchart 
  // chart.js
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };

  // chart type
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];
  public barChartData: ChartData<'bar'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', ' Week 5', 'Week 6', 'Week 7'],
    datasets: [
      {data: [100, 85, 79, 56, 22, 15, 0], label: "Students solved tasks in %"},
      {data: [0, 15, 21, 44, 78, 85, 100], label: "Students haven't solved tasks in %"}
    ]
  };

  // event chartClicked
  public chartClicked({event, active}: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  // event chartHovered
  public chartHovered({event, active}: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

}
