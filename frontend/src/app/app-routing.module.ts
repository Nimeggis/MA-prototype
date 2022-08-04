import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseAdapterConfigComponent} from './adapter-course/adapter-config/adapter-config.component';
import {CourseAdapterHomeComponent} from './adapter-course/adapter-home/adapter-home.component';
import {FlashcardsAdapterConfigComponent} from './adapter-flashcards/adapter-config/adapter-config.component';
import {FlashcardsAdapterHomeComponent} from './adapter-flashcards/adapter-home/adapter-home.component';
import {GamificationAdapterConfigComponent} from './adapter-gamification/adapter-config/adapter-config.component';
import {GamificationAdapterHomeComponent} from './adapter-gamification/adapter-home/adapter-home.component';
import {KnowledgeAdapterConfigComponent} from './adapter-knowledge/adapter-config/adapter-config.component';
import {KnowledgeAdapterHomeComponent} from './adapter-knowledge/adapter-home/adapter-home.component';
import { MatchingAdapterConfigComponent } from './adapter-matching/adapter-config/adapter-config.component';
import { MatchingAdapterHomeComponent } from './adapter-matching/adapter-home/adapter-home.component';
import { AdapterOverviewComponent } from './adapter-overview/adapter-overview.component';
import {QuizAdapterConfigComponent} from './adapter-quiz/adapter-config/adapter-config.component';
import {QuizAdapterHomeComponent} from './adapter-quiz/adapter-home/adapter-home.component';
import {VideoAdapterConfigComponent} from './adapter-video/adapter-config/adapter-config.component';
import {VideoAdapterHomeComponent} from './adapter-video/adapter-home/adapter-home.component';
import { CourseConfigurationComponent } from './course-configuration/course-configuration.component';
import {CreateCourseComponent} from './create-course/create-course.component';
import {LecturerDashboardComponent} from './lecturer-dashboard/lecturer-dashboard.component';
import {LecturerHomeComponent} from './lecturer-home/lecturer-home.component';
import {LoginComponent} from './login/login.component';
import {StudentDashboardComponent} from './student-dashboard/student-dashboard.component';
import {StudentHomeComponent} from './student-home/student-home.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'student-home',
    component: StudentHomeComponent
  },
  {
    path: 'lecturer-home',
    component: LecturerHomeComponent
  },
  {
    path: 'lecturer-dashboard/course/:id',
    component: LecturerDashboardComponent
  },
  {
    path: 'student-dashboard/course/:id',
    component: StudentDashboardComponent
  },
  {
    path: 'create-course',
    component: CreateCourseComponent
  },
  {
    path: 'course-config/course/:id',
    component: CourseConfigurationComponent
  },
  {
    path: 'course-adapter/course/:id',
    component: CourseAdapterHomeComponent
  },
  {
    path: 'course-adapter-config/course/:id',
    component: CourseAdapterConfigComponent
  },
  {
    path: 'flashcards-adapter',
    component: FlashcardsAdapterHomeComponent
  },
  {
    path: 'flashcards-adapter-config/course/:id',
    component: FlashcardsAdapterConfigComponent
  },
  {
    path: 'gamification-adapter',
    component: GamificationAdapterHomeComponent
  },
  {
    path: 'gamification-adapter-config/course/:id',
    component: GamificationAdapterConfigComponent
  },
  {
    path: 'knowledge-adapter',
    component: KnowledgeAdapterHomeComponent
  },
  {
    path: 'knowledge-adapter-config/course/:id',
    component: KnowledgeAdapterConfigComponent
  },
  {
    path: 'quiz-adapter',
    component: QuizAdapterHomeComponent
  },
  {
    path: 'quiz-adapter-config/course/:id',
    component: QuizAdapterConfigComponent
  },
  {
    path: 'video-adapter',
    component: VideoAdapterHomeComponent
  },
  {
    path: 'video-adapter-config/course/:id',
    component: VideoAdapterConfigComponent
  },
  {
    path: 'adapter-overview/course/:id/:adapter',
    component: AdapterOverviewComponent
  },  
  {
    path: 'matching-adapter',
    component: MatchingAdapterHomeComponent
  },
  {
    path: 'matching-adapter-config/course/:id',
    component: MatchingAdapterConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
