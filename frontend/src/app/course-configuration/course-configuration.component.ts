import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses, DataService } from '../utils/http/data.service';

@Component({
  selector: 'app-course-configuration',
  templateUrl: './course-configuration.component.html',
  styleUrls: ['./course-configuration.component.css']
})
export class CourseConfigurationComponent implements OnInit {

  // initialization of variables
  courseInfo: Courses | undefined;
  courseId: Number = 0;
  tmpAdapter : string[] | undefined = [];
  installedAdapter : string[] = [];
  adapterIds: string = "";

  // constructor
  constructor(private titleService: Title, private route: ActivatedRoute, private data: DataService, private router: Router) {
    this.titleService.setTitle("IT-REX Prototype - Course Configuration");
   }

  // execute function when loading component
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      // get courseId
      this.courseId = params['id'];
      this.data.getCourseInfo(this.courseId).subscribe(result => {
        // get courseInfo from courseId
        this.courseInfo = result;
        this.tmpAdapter = this.courseInfo?.courseAdapter.split(",", -1);
        // loop to get installed adapters
        for(let adapterId of this.tmpAdapter!){
          this.data.getAdapterInfo(adapterId).subscribe(result => {
            // get courseInfo from courseId
            this.installedAdapter.push(result.adapterName);
          });
       }
      });
    });
  }

  // install adapter in course
  addAdapter(adapterName:String) {
    this.data.getAdapterIds(adapterName).subscribe(result=> {
      // get adapterInfo of selected adapter
      this.adapterIds = this.adapterIds.replace(/,,/g, ',');
      this.adapterIds = this.adapterIds.replace(/,$/g, '');
      this.adapterIds = this.adapterIds.replace(/^,/g, '');
      this.adapterIds = this.courseInfo?.courseAdapter.concat(",", result.toString())!;
      this.data.updateCourseAdapter(this.courseId, this.adapterIds.replace(/,/g,'-')).subscribe(result => {
        // update installed adapter in course
        // create configuration of installed adapter
        this.createAdapterConfig(adapterName);
        this.reloadPage();
      });
    });
  }

  // delete adapter from course
  delAdapter(adapterName:String) {
    this.data.getAdapterIds(adapterName).subscribe(result=> { 
      // get adapterInfo of selected adapter
      this.adapterIds = this.courseInfo?.courseAdapter.replace(''+result, '')!;
      this.adapterIds = this.adapterIds.replace(/,,/g, ',');
      this.adapterIds = this.adapterIds.replace(/,$/g, '');
      this.adapterIds = this.adapterIds.replace(/^,/g, '');
      this.data.updateCourseAdapter(this.courseId, this.adapterIds.replace(/,/g,'-')).subscribe(result => {
        // update installed adapter in course
        // delete configuration of uninstalled adapter
        this.deleteAdapterConfig(adapterName);
        this.reloadPage();
      });
    });
  }

  // onClick to open selected adapter configuration page
  openConfig(adapterName:String) {
    if(adapterName == "Video Upload"){
      this.router.navigate(["/video-adapter-config/course/"+this.courseId])
    } else if (adapterName == "Course Timeline") {
      this.router.navigate(["/course-adapter-config/course/"+this.courseId])
    } else if (adapterName == "Quiz Upload") {
      this.router.navigate(["/quiz-adapter-config/course/"+this.courseId])
    } else if (adapterName == "Knowledge Progress") {
      this.router.navigate(["/knowledge-adapter-config/course/"+this.courseId])
    } else if (adapterName == "Flashcards") {
      this.router.navigate(["/flashcards-adapter-config/course/"+this.courseId])
    } else if (adapterName == "Gamification") {
      this.router.navigate(["/gamification-adapter-config/course/"+this.courseId])
    } else if (adapterName == "Matching Exercise") {
      this.router.navigate(["/matching-adapter-config/course/"+this.courseId])
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

  // delete configuration of uninstalled adapter
  deleteAdapterConfig(adapterName:String) {
    if(adapterName == "Video Upload"){
      this.data.deleteConfigVideo(this.courseId).subscribe();
    } else if (adapterName == "Course Timeline") {
      this.data.deleteConfigCourse(this.courseId).subscribe();
    } else if (adapterName == "Quiz Upload") {
      this.data.deleteConfigQuiz(this.courseId).subscribe();
    } else if (adapterName == "Knowledge Progress") {
      this.data.deleteConfigKnowledge(this.courseId).subscribe();
    } else if (adapterName == "Flashcards") {
      this.data.deleteConfigFlashcards(this.courseId).subscribe();
    } else if (adapterName == "Gamification") {
      this.data.deleteConfigGamification(this.courseId).subscribe();
    } else if (adapterName == "Matching Exercise") {
      this.data.deleteConfigMatching(this.courseId).subscribe();
    }
  }

  // reload page
  reloadPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
}
