import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ChartConfiguration, ChartData, ChartEvent, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import { DataService, Courses } from '../utils/http/data.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  // initialization of variables
  courseList: Courses[] = [];

  // constructor
  constructor(private titleService: Title, private data: DataService) {
    this.titleService.setTitle("IT-REX Prototype - Student Home");
  }

  // execute function when loading component
  ngOnInit(): void {
    this.data.getCoursesConsole().subscribe(result => {
      this.courseList = result;
    });
  }

  // BarChart Tasks solved
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
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];
  public barChartData: ChartData<'bar'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', ' Week 5', 'Week 6', 'Week 7'],
    datasets: [
      {data: [100, 85, 79, 56, 22, 15, 0], label: 'Tasks done in %'},
      {data: [0, 15, 21, 44, 78, 85, 100], label: 'Tasks open in %'}
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
