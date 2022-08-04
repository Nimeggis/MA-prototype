import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ActivatedRoute, Router } from '@angular/router';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { AppComponent } from '../app.component';
import { Adapter, Courses, DashAdapter, DataService } from '../utils/http/data.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  // initialization of variables
  // info variables
  courseInfo: Courses | undefined;
  courseId: Number = 0;
  adapterInfo: Adapter | undefined;
  username: string = '';

  // adapter variables
  adapterList: String[] = [];
  adapterNames: Adapter[] = [];
  adapterApps: String[] = [];
  adapterDash: DashAdapter[] = [];

  // styling variables
  textCenter: string = 'flex';
  textAlign: string = 'left';
  textTop: string = '0em';
  largeWidgets: Number[] = [0,3,4,7];
  smallWidgets: Number[] = [1,2,5,6];

  // constructor
  constructor(private titleService: Title, private data: DataService, private route: ActivatedRoute, private router: Router, private appComponent: AppComponent) {
    this.titleService.setTitle("IT-REX Prototype - Student Dashboard");
  }

  // execute function when loading component
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      // get courseId
      this.courseId = params['id'];
      this.data.getCourseInfo(this.courseId).subscribe(courseInf => {
        // get courseInfo from courseId
        this.courseInfo = courseInf;
        this.adapterList = this.courseInfo?.courseAdapter.split(",");
        this.data.getAdapterConsole().subscribe(adapterName => {
          // get all adapters
          this.adapterNames = adapterName;
          // loop to get in course installed adapters
          for(let adapter of this.adapterList!){
            var idNumber: number = +adapter;
            this.adapterApps?.push(""+this.adapterNames.find(adapterN => adapterN.id === idNumber)?.shortName);
          }
          this.data.getDashAdapter(this.courseId).subscribe(dashAdapter => {
            // get adapters which are enabled for dashboard
            this.adapterDash = dashAdapter;
          })
        })
      });
    });
    // hide lecturer editing tools from student
    this.username = this.appComponent.getCookie("user");
    if(this.username == "student"){
      this.textCenter='unset';
      this.textAlign='center';
      this.textTop='-2.5em';
    }
  }

  // open course configuration
  toCourseConfig() {
    this.router.navigate(["/course-config/course/"+this.courseId]);
  }

  // delete course
  delCourse() {
    this.data.deleteCourse(this.courseId).subscribe();
    this.router.navigate(["/lecturer-home"]);
  }

  // open course timeline business logic
  openApp(adapterName:String) {
    if(adapterName == "Course Timeline") {
      this.router.navigate(["/course-adapter/course/"+this.courseId]);
    }
  }

  // doughnutChart Student Performance
  // chart.js
  public doughnutChartLabels: string[] = [ 'Knowledge Gained', 'In Progress', 'Knowledge Needed' ];
  public doughnutChartColors: string[] = [ 'rgba(46, 135, 84, .7)', 'rgba(226, 194, 9, .7)', 'rgba(220, 53, 70, .7)' ];
  public doughnutChartColorsHover: string[] = [ 'rgb(46, 135, 84)', 'rgb(226, 194, 9)', 'rgb(220, 53, 70)' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: this.doughnutChartColors, hoverBackgroundColor: this.doughnutChartColorsHover, hoverBorderColor: this.doughnutChartColorsHover },
      { data: [ 50, 150, 120 ], backgroundColor: this.doughnutChartColors, hoverBackgroundColor: this.doughnutChartColorsHover, hoverBorderColor: this.doughnutChartColorsHover},
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // event chartClicked
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  // event chartHovered
  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
