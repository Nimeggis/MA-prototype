import {Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Adapter, Courses, DataService, GameConfig, GamificationConfig } from 'src/app/utils/http/data.service';

@Component({
  selector: 'app-adapter-config',
  templateUrl: './adapter-config.component.html',
  styleUrls: ['./adapter-config.component.css']
})
export class GamificationAdapterConfigComponent implements OnInit {

  // initialization of variables
  // info variables
  courseInfo: Courses | undefined;
  courseId: Number = 0;
  adapterInfo: Adapter | undefined;
  configInfo: GamificationConfig | undefined;

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
  scoreboardSelect: string = "false";
  pointSelect: string = "never";

  // configuration form
  configForm = this.formBuilder.group({
    milestone: '',
    point_reset: '',
    scoreboard: '',
    dashboard: ''
  });

  // constructor
  constructor(private titleService: Title, private route: ActivatedRoute, private data: DataService, private router: Router, private formBuilder: FormBuilder) {
    this.titleService.setTitle("IT-REX Prototype - Adapter Configuration - Gamification");
  }

  // execute function when loading component
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      // get courseId
      this.courseId = params['id'];
      this.data.getCourseInfo(this.courseId).subscribe(courseInfo => {
        // get courseInfo from courseId
        this.courseInfo = courseInfo;
        this.data.getAdapterIds("Gamification").subscribe(adapterId => {
          // get adapterId of Gamification
          this.data.getAdapterInfo(adapterId).subscribe(adapterInfo => {
            // get adapterInfo from adapterId
            this.adapterInfo = adapterInfo;
            this.listAdapter = this.adapterInfo.compatibleAdapters.split(",");
            this.data.getConfigGamification(this.courseId).subscribe(gamificationConfig => {
              // get config from gamification
              this.configInfo = gamificationConfig;
              if(this.configInfo.displayedDash) {
                this.dashboardSelect = "true";
                this.displayDash = "unset";
              }
              if(this.configInfo.scoreboard) {
                this.scoreboardSelect = "true";
              }
              this.pointSelect = this.configInfo.pointReset;
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

  // submit configuration form of course adapter
  submitConfig() {
    const gamificationConfig: GameConfig = { displayedDash: this.configForm.value.dashboard, milestone: this.configForm.value.milestone, pointReset: this.configForm.value.point_reset, scoreboard: this.configForm.value.scoreboard}
    this.data.updateGamificationConfig(this.courseId, gamificationConfig).subscribe(result=>{
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
    this.data.getAdapterIds("Gamification").subscribe(adapterId => {
      // get adapterId of Gamification
      this.data.getAdapterInfo(adapterId).subscribe(adapterInfo => {
        // get adapterInfo of adapterId
        this.adapterInfo = adapterInfo;
        this.data.getAdapterIds(adapter).subscribe(adapterId => {
          // get adapterInfo of selected adapter
          this.data.getConfigGamification(this.courseId).subscribe(gamificationConfig => {
            // get gamification configuration from courseId
            this.adapterList = gamificationConfig.linkedAdapter.concat(",",""+adapterId)!;
            this.tmpAdapterList = this.adapterList.replace(/,/g,'-');
            this.tmpAdapterList = this.tmpAdapterList.replace(/^-/g,'');
            this.tmpAdapterList = this.tmpAdapterList.replace(/-$/g,'');
            this.data.setAdapterGamification(this.courseId,this.tmpAdapterList).subscribe(result => {
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
    this.data.getAdapterIds("Gamification").subscribe(adapterId => {
      // get adapterId of Gamification
      this.data.getAdapterInfo(adapterId).subscribe(adapterInfo => {
        // get adapterInfo of adapterId
        this.adapterInfo = adapterInfo;
        this.data.getAdapterIds(adapter).subscribe(adapterId => {
          // get adapterInfo of selected adapter
          this.data.getConfigGamification(this.courseId).subscribe(gamificationConfig => {
            // get gamification configuration from courseId
            this.listAdapter = gamificationConfig.linkedAdapter.split(",");
            this.listAdapter.forEach((adapter,index)=>{
              if(adapter==adapterId.toString()) this.listAdapter.splice(index,1);
            });
            this.tmpAdapterList = this.listAdapter.join("-");
            this.data.setAdapterGamification(this.courseId,this.tmpAdapterList).subscribe(result => {
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
}
