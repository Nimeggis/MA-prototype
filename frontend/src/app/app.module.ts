import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {StudentHomeComponent} from './student-home/student-home.component';
import {LecturerHomeComponent} from './lecturer-home/lecturer-home.component';
import {LecturerDashboardComponent} from './lecturer-dashboard/lecturer-dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StudentDashboardComponent} from './student-dashboard/student-dashboard.component';
import {NgChartsModule} from 'ng2-charts';
import {CreateCourseComponent} from './create-course/create-course.component';

import {CourseAdapterConfigComponent} from './adapter-course/adapter-config/adapter-config.component';
import {CourseAdapterHomeComponent} from './adapter-course/adapter-home/adapter-home.component';
import {FlashcardsAdapterConfigComponent} from './adapter-flashcards/adapter-config/adapter-config.component';
import {FlashcardsAdapterHomeComponent} from './adapter-flashcards/adapter-home/adapter-home.component';
import {GamificationAdapterConfigComponent} from './adapter-gamification/adapter-config/adapter-config.component';
import {GamificationAdapterHomeComponent} from './adapter-gamification/adapter-home/adapter-home.component';
import {KnowledgeAdapterConfigComponent} from './adapter-knowledge/adapter-config/adapter-config.component';
import {KnowledgeAdapterHomeComponent} from './adapter-knowledge/adapter-home/adapter-home.component';
import {QuizAdapterConfigComponent} from './adapter-quiz/adapter-config/adapter-config.component';
import {QuizAdapterHomeComponent} from './adapter-quiz/adapter-home/adapter-home.component';
import {VideoAdapterConfigComponent} from './adapter-video/adapter-config/adapter-config.component';
import {VideoAdapterHomeComponent} from './adapter-video/adapter-home/adapter-home.component';
import {HttpClientModule} from '@angular/common/http';
import { adapter, course, courseConfiguration, dashboard, environment, flashcardsConfiguration, gamificationConfiguration, knowledgeConfiguration, quizConfiguration, videoConfiguration, matchingConfiguration} from 'src/environments/environment';
import { HttpModule } from './utils/http/http.module';
import { CourseConfigurationComponent } from './course-configuration/course-configuration.component';
import { AdapterOverviewComponent } from './adapter-overview/adapter-overview.component';
import { MatchingAdapterConfigComponent } from './adapter-matching/adapter-config/adapter-config.component';
import { MatchingAdapterHomeComponent } from './adapter-matching/adapter-home/adapter-home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    StudentHomeComponent,
    LecturerHomeComponent,
    LecturerDashboardComponent,
    StudentDashboardComponent,
    CreateCourseComponent,
    CourseAdapterConfigComponent,
    CourseAdapterHomeComponent,
    FlashcardsAdapterConfigComponent,
    FlashcardsAdapterHomeComponent,
    GamificationAdapterConfigComponent,
    GamificationAdapterHomeComponent,
    KnowledgeAdapterConfigComponent,
    KnowledgeAdapterHomeComponent,
    QuizAdapterConfigComponent,
    QuizAdapterHomeComponent,
    VideoAdapterConfigComponent,
    VideoAdapterHomeComponent,
    MatchingAdapterConfigComponent,
    MatchingAdapterHomeComponent,
    CourseConfigurationComponent,
    AdapterOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    NgChartsModule,
    HttpClientModule,
    HttpModule.forRoot({adapter,course,dashboard,environment,courseConfiguration,flashcardsConfiguration,gamificationConfiguration, knowledgeConfiguration, quizConfiguration, videoConfiguration, matchingConfiguration})
  ],
  providers: [LoginComponent, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
