import {Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Adapter, Courses, DataService, KnowConfig, KnowledgeConfig } from 'src/app/utils/http/data.service';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-adapter-config',
  templateUrl: './adapter-config.component.html',
  styleUrls: ['./adapter-config.component.css']
})
export class KnowledgeAdapterConfigComponent implements OnInit {
  
  // initialization of variables
  // info variables
  courseInfo: Courses | undefined;
  courseId: Number = 0;
  adapterInfo: Adapter | undefined;
  configInfo: KnowledgeConfig | undefined;

  // adapter variables
  listAdapter: String[] = [];
  adapterList: string = "";
  tmpAdapterList: string = "";

  // linking variables
  linkedAdapter: String[] = [];
  notLinkedAdapter: String[] = [];

  // specific adapter variables
  displayDash: string = "none";
  dashboardSelect: string = "false";
  colorSuccessSelect: string = "green";
  colorInProgressSelect: string = "orange";
  colorUpcomingSelect: string = "red";

  // configuration form
  configForm = this.formBuilder.group({
    colorSuccess: '',
    colorInProgress: '',
    colorUpcoming: '',
    dashboard: ''
  });

  // constructor
  constructor(private titleService: Title, private route: ActivatedRoute, private data: DataService, private router: Router, private formBuilder: FormBuilder) {
    this.titleService.setTitle("IT-REX Prototype - Adapter Configuration - Knowledge Progress");
  }

  // execute function when loading component
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      // get courseId
      this.courseId = params['id'];
      this.data.getCourseInfo(this.courseId).subscribe(courseInfo => {
        // get courseInfo from courseId
        this.courseInfo = courseInfo;
        this.data.getAdapterIds("Knowledge Progress").subscribe(adapterId => {
          // get adapterId of Knowledge Progress
          this.data.getAdapterInfo(adapterId).subscribe(adapterInfo => {
            // get adapterInfo from adapterId
            this.adapterInfo = adapterInfo;
            this.listAdapter = this.adapterInfo.compatibleAdapters.split(",");
            this.data.getConfigKnowledge(this.courseId).subscribe(knowledgeConfig => {
              // get config from knowledge progress adapter
              this.configInfo = knowledgeConfig;
              if(this.configInfo.displayedDash) {
                this.dashboardSelect = "true";
                this.displayDash = "unset";
              }
              this.colorSuccessSelect = this.configInfo.colorSuccess;
              this.colorInProgressSelect = this.configInfo.colorInProgress;
              this.colorUpcomingSelect = this.configInfo.colorUpcoming;
              // loop to get linked and unlinked adapters
              for(let adapter of this.listAdapter){
                if(this.courseInfo?.courseAdapter.includes(adapter.toString()) && this.configInfo.linkedAdapter.includes(adapter.toString())){
                  this.data.getAdapterInfo(adapter).subscribe(adapterInfo => {
                    this.linkedAdapter.push(adapterInfo.adapterName);
                  })
                } else if(this.courseInfo?.courseAdapter.includes(adapter.toString())) {
                  this.data.getAdapterInfo(adapter).subscribe(adapterInfo => {
                    this.notLinkedAdapter.push(adapterInfo.adapterName);
                  })
                }
              }
            })
          });
        })
      });
    });
  }

  // submit configuration form of knowledge progress adapter
  submitConfig() {
    const knowledgeConfig: KnowConfig = { displayedDash: this.configForm.value.dashboard, colorSuccess: this.configForm.value.colorSuccess, colorInProgress: this.configForm.value.colorInProgress, colorUpcoming: this.configForm.value.colorUpcoming}
    this.data.updateKnowledgeConfig(this.courseId, knowledgeConfig).subscribe(result=>{
      this.reloadPage();
    });
  }

  // hide dashboard preview when turned false
  onChange(dashboard: string) {
    if (dashboard == "true") {
      this.displayDash = "unset";
    } else if ((dashboard == "false")) {
      this.displayDash = "none";
    }
  }

  // add Adapter to linked Adapter
  addAdapter(adapter: String) {
    this.data.getAdapterIds("Knowledge Progress").subscribe(adapterId => {
      // get adapterId of Knowledge Progress
      this.data.getAdapterInfo(adapterId).subscribe(adapterInfo => {
        // get adapterInfo of selected adapter
        this.adapterInfo = adapterInfo;
        this.data.getAdapterIds(adapter).subscribe(adapterId => {
          // get knowledge progress configuration from courseId
          this.data.getConfigKnowledge(this.courseId).subscribe(knowledgeConfig => {
            this.adapterList = knowledgeConfig.linkedAdapter.concat(",",""+adapterId)!;
            this.tmpAdapterList = this.adapterList.replace(/,/g,'-');
            this.tmpAdapterList = this.tmpAdapterList.replace(/^-/g,'');
            this.tmpAdapterList = this.tmpAdapterList.replace(/-$/g,'');
            this.data.setAdapterKnowledge(this.courseId,this.tmpAdapterList).subscribe(result => {
              // link adapter to each other
              // reload page
              this.reloadPage();
            });
          });
        })
      });
    })
  }

  // add Adapter to unlinked Adapter / unlink adapter
  delAdapter(adapter: String) {
    this.data.getAdapterIds("Knowledge Progress").subscribe(adapterId => {
      // get adapterId of Knowledge Progress
      this.data.getAdapterInfo(adapterId).subscribe(adapterInfo => {
        // get adapterInfo of adapterId
        this.adapterInfo = adapterInfo;
        this.data.getAdapterIds(adapter).subscribe(adapterId => {
          // get adapterInfo of selected adapter
          this.data.getConfigKnowledge(this.courseId).subscribe(knowledgeConfig => {
            // get knowledge progress configuration from courseId
            this.listAdapter = knowledgeConfig.linkedAdapter.split(",");
            this.listAdapter.forEach((adapter,index)=>{
              if(adapter==adapterId.toString()) this.listAdapter.splice(index,1);
            });
            this.tmpAdapterList = this.listAdapter.join("-");
            this.data.setAdapterKnowledge(this.courseId,this.tmpAdapterList).subscribe(result => {
              // unlink adapter of each other
              // reload page
              this.reloadPage();
            });
          });
        })
      });
    })
  }

  // reload page
  reloadPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  // doughnut chart
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
