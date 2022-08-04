import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { EnvironmentConfig, ENV_CONFIG } from "./environment-config.interface";

@Injectable({
    providedIn: 'root'
  })
  export class DataService {

    // initialization of variables
    // variables for URL of respective Microservices
    public adapter: string;
    public course: string;
    public dashboard: string;

    // variables for URL of respective Adapters (Configuration only)
    public courseConfiguration: string;
    public flashcardsConfiguration: string;
    public gamificationConfiguration: string;
    public knowledgeConfiguration: string;
    public quizConfiguration: string;
    public videoConfiguration: string;
    public matchingConfiguration: string;

    // constructor
    constructor(@Inject(ENV_CONFIG) private config: EnvironmentConfig, private http: HttpClient) {
      
      // set URL to variables
      this.adapter = `${config.adapter.baseUrl}`;
      this.course = `${config.course.baseUrl}`;
      this.dashboard = `${config.dashboard.baseUrl}`;
      this.courseConfiguration = `${config.courseConfiguration.baseUrl}`;
      this.flashcardsConfiguration = `${config.flashcardsConfiguration.baseUrl}`;
      this.gamificationConfiguration = `${config.gamificationConfiguration.baseUrl}`;
      this.knowledgeConfiguration = `${config.knowledgeConfiguration.baseUrl}`;
      this.quizConfiguration = `${config.quizConfiguration.baseUrl}`;
      this.videoConfiguration = `${config.videoConfiguration.baseUrl}`;
      this.matchingConfiguration = `${config.matchingConfiguration.baseUrl}`;
    }

    // get all courses as list
    getCoursesConsole() {
      return this.http.get<Courses[]>(`${this.course}/getAll`);
    }

    // get all adapters as list
    getAdapterConsole() {
      return this.http.get<Adapter[]>(`${this.adapter}/getAll`);
    }

    // get all adapters (which are enabled as dashboard widget) as list
    getDashAdapter(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.get<DashAdapter[]>(`${this.dashboard}/getDashAdapter/`+courseId, {'headers':headers});
    }

    // get course information
    getCourseInfo(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.get<Courses>(`${this.course}/getCourse/`+courseId, {'headers':headers});
    }

    // create new course
    createCourse(course:CourseForm) {
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(course);
      return this.http.post<Courses>(`${this.course}/createCourse`, body, {'headers':headers});
    }

    // delete course
    deleteCourse(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.delete<String>(`${this.course}/deleteCourse/`+courseId, {'headers':headers});
    }
    
    // get adapter information
    getAdapterInfo(adapterId:String) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.get<Adapter>(`${this.adapter}/getAdapter/`+adapterId, {'headers':headers});
    }

    // get adapterId by name
    getAdapterIds(adapterName:String) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.get<String>(`${this.adapter}/getIDs/`+adapterName, {'headers':headers});
    }

    // update installed adapter of a course with Ids
    updateCourseAdapter(courseId:Number, adapterIds:string) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.put<Courses>(`${this.course}/updateCourse/`+courseId+`/`+adapterIds, {'headers':headers});
    }

    // ------------- COURSE TIMELINE -------------
    // create new default configuration of course adapter when installing
    createConfigCourse(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.post<CourseTimeConfig>(`${this.courseConfiguration}/createConfig/`+courseId, {'headers':headers});
    }

    // delete configuration of adapter when uninstalling
    deleteConfigCourse(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.delete<CourseTimeConfig>(`${this.courseConfiguration}/deleteConfig/`+courseId, {'headers':headers});
    }

    // get configuration of course adapter for specific course
    getConfigCourse(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.get<CourseTimeConfig>(`${this.courseConfiguration}/getConfig/`+courseId, {'headers':headers});
    }

    // set linked/unliked adapter to configuration
    setAdapterCourse(courseId:Number, adapterId:String) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.put<CourseTimeConfig>(`${this.courseConfiguration}/setAdapter/`+courseId+`/`+adapterId, {'headers':headers});
    }

    // update course configuration / save changes
    updateCourseConfig(courseId:Number, courseConfig:CourseConfig){
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(courseConfig);
      return this.http.put<CourseTimeConfig>(`${this.courseConfiguration}/updateAdapter/`+courseId, body, {'headers':headers});
    }

    // ------------- FLASHCARDS -------------
    // create new default configuration of flashcards adapter when installing
    createConfigFlashcards(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.post<FlashCardConfig>(`${this.flashcardsConfiguration}/createConfig/`+courseId, {'headers':headers});
    }

    // delete configuration of adapter when uninstalling
    deleteConfigFlashcards(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.delete<FlashCardConfig>(`${this.flashcardsConfiguration}/deleteConfig/`+courseId, {'headers':headers});
    }

    // get configuration of flashcards adapter for specific course
    getConfigFlashcards(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.get<FlashCardConfig>(`${this.flashcardsConfiguration}/getConfig/`+courseId, {'headers':headers});
    }

    // set linked/unliked adapter to configuration
    setAdapterFlashcards(courseId:Number, adapterId:String) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.put<FlashCardConfig>(`${this.flashcardsConfiguration}/setAdapter/`+courseId+`/`+adapterId, {'headers':headers});
    }

    // update course configuration / save changes
    updateFlashConfig(courseId:Number, flashcardConfig:FlashConfig){
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(flashcardConfig);
      return this.http.put<FlashCardConfig>(`${this.flashcardsConfiguration}/updateAdapter/`+courseId, body, {'headers':headers});
    }

    // ------------- GAMIFICATION -------------
    // create new default configuration of gamification adapter when installing
    createConfigGamification(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.post<GamificationConfig>(`${this.gamificationConfiguration}/createConfig/`+courseId, {'headers':headers});
    }

    // delete configuration of adapter when uninstalling
    deleteConfigGamification(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.delete<GamificationConfig>(`${this.gamificationConfiguration}/deleteConfig/`+courseId, {'headers':headers});
    }

    // get configuration of gamification adapter for specific course
    getConfigGamification(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.get<GamificationConfig>(`${this.gamificationConfiguration}/getConfig/`+courseId, {'headers':headers});
    }

    // set linked/unliked adapter to configuration
    setAdapterGamification(courseId:Number, adapterId:String) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.put<GamificationConfig>(`${this.gamificationConfiguration}/setAdapter/`+courseId+`/`+adapterId, {'headers':headers});
    }

    // update course configuration / save changes
    updateGamificationConfig(courseId:Number, gamificationConfig:GameConfig){
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(gamificationConfig);
      return this.http.put<GamificationConfig>(`${this.gamificationConfiguration}/updateAdapter/`+courseId, body, {'headers':headers});
    }

    // ------------- KNOWLEDGE PROGRESS -------------
    // create new default configuration of knowledge progress adapter when installing
    createConfigKnowledge(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.post<KnowledgeConfig>(`${this.knowledgeConfiguration}/createConfig/`+courseId, {'headers':headers});
    }

    // delete configuration of adapter when uninstalling
    deleteConfigKnowledge(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.delete<KnowledgeConfig>(`${this.knowledgeConfiguration}/deleteConfig/`+courseId, {'headers':headers});
    }

    // get configuration of knowledge progress adapter for specific course
    getConfigKnowledge(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.get<KnowledgeConfig>(`${this.knowledgeConfiguration}/getConfig/`+courseId, {'headers':headers});
    }

    // set linked/unliked adapter to configuration
    setAdapterKnowledge(courseId:Number, adapterId:String) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.put<KnowledgeConfig>(`${this.knowledgeConfiguration}/setAdapter/`+courseId+`/`+adapterId, {'headers':headers});
    }

    // update course configuration / save changes
    updateKnowledgeConfig(courseId:Number, knowledgeConfig:KnowConfig){
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(knowledgeConfig);
      return this.http.put<KnowledgeConfig>(`${this.knowledgeConfiguration}/updateAdapter/`+courseId, body, {'headers':headers});
    }

    // ------------- QUIZ UPLOAD -------------
    // create new default configuration of quiz adapter when installing
    createConfigQuiz(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.post<QuizConfig>(`${this.quizConfiguration}/createConfig/`+courseId, {'headers':headers});
    }

    // delete configuration of adapter when uninstalling
    deleteConfigQuiz(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.delete<QuizConfig>(`${this.quizConfiguration}/deleteConfig/`+courseId, {'headers':headers});
    }

    // get configuration of quiz adapter for specific course
    getConfigQuiz(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.get<QuizConfig>(`${this.quizConfiguration}/getConfig/`+courseId, {'headers':headers});
    }

    // set linked/unliked adapter to configuration
    setAdapterQuiz(courseId:Number, adapterId:String) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.put<QuizConfig>(`${this.quizConfiguration}/setAdapter/`+courseId+`/`+adapterId, {'headers':headers});
    }

    // update course configuration / save changes
    updateQuizConfig(courseId:Number, quizConfig:QConfig){
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(quizConfig);
      return this.http.put<QuizConfig>(`${this.quizConfiguration}/updateAdapter/`+courseId, body, {'headers':headers});
    }
    
    // ------------- VIDEO UPLOAD -------------
    // create new default configuration of video adapter when installing
    createConfigVideo(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.post<VideoConfig>(`${this.videoConfiguration}/createConfig/`+courseId, {'headers':headers});
    }

    // delete configuration of adapter when uninstalling
    deleteConfigVideo(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.delete<VideoConfig>(`${this.videoConfiguration}/deleteConfig/`+courseId, {'headers':headers});
    }

    // get configuration of video adapter for specific course
    getConfigVideo(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.get<VideoConfig>(`${this.videoConfiguration}/getConfig/`+courseId, {'headers':headers});
    }

    // set linked/unliked adapter to configuration
    setAdapterVideo(courseId:Number, adapterId:String) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.put<VideoConfig>(`${this.videoConfiguration}/setAdapter/`+courseId+`/`+adapterId, {'headers':headers});
    }

    // update course configuration / save changes
    updateVideoConfig(courseId:Number, videoConfig:VConfig){
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(videoConfig);
      return this.http.put<VideoConfig>(`${this.videoConfiguration}/updateAdapter/`+courseId, body, {'headers':headers});
    }

    // ------------- MATCHING EXERCISE -------------
    // create new default configuration of matching exercise adapter when installing
    createConfigMatching(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.post<MatchingConfig>(`${this.matchingConfiguration}/createConfig/`+courseId, {'headers':headers});
    }

    // delete configuration of adapter when uninstalling
    deleteConfigMatching(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.delete<MatchingConfig>(`${this.matchingConfiguration}/deleteConfig/`+courseId, {'headers':headers});
    }

    // get configuration of matching exercise adapter for specific course
    getConfigMatching(courseId:Number) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.get<MatchingConfig>(`${this.matchingConfiguration}/getConfig/`+courseId, {'headers':headers});
    }

    // set linked/unliked adapter to configuration
    setAdapterMatching(courseId:Number, adapterId:String) {
      const headers = { 'content-type': 'application/json'}  
      return this.http.put<MatchingConfig>(`${this.matchingConfiguration}/setAdapter/`+courseId+`/`+adapterId, {'headers':headers});
    }

    // update course configuration / save changes
    updateMatchingConfig(courseId:Number, matchConfig:MatchConfig){
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(matchConfig);
      return this.http.put<MatchingConfig>(`${this.matchingConfiguration}/updateAdapter/`+courseId, body, {'headers':headers});
    }
  }

  // Object Course Form
  export interface CourseForm {
    courseName: string;
    courseDescription: string;
    courseStart: Date;
    courseEnd: Date;
    courseAdapter: string;
    fieldofstudy: string;
  }

  // Object Course Backend
  export interface Courses {
    id: number;
    courseName: string;
    courseDescription: string;
    courseStart: Date;
    courseEnd: Date;
    courseAdapter: string;
    fieldofstudy: string;
  }

  // Object Adapter Backend
  export interface Adapter {
    id: number;
    adapterName: string;
    adapterDescription: string;
    adapterCreateContent: boolean;
    compatibleAdapters: string;
    shortName: string;
  }

  // Object for Dashboard Widget
  export interface DashAdapter {
    dashBoolean: boolean;
    id: string;
  }

  // Object complete backend course timeline
  export interface CourseTimeConfig {
    id: number;
    courseId: number;
    linkedAdapter: string;
    displayedDash: boolean;
    periodLength: string;
    periodStart: string;
    warning: boolean;
  }

  // Object specific backend course timeline
  export interface CourseConfig{
    displayedDash: boolean;
    periodLength: string;
    periodStart: string;
    warning: boolean;
  }

  // Object complete backend flashcards
  export interface FlashCardConfig {
    id: number;
    courseId: number;
    linkedAdapter: string;
    displayedDash: boolean;
    timeFlashcard: number;
    daysRepetition: number;
    hint: boolean;
  }

  // Object specific backend flashcards
  export interface FlashConfig{
    displayedDash: boolean;
    timeFlashcard: number;
    daysRepetition: number;
    hint: boolean;
  }

  // Object complete backend gamification
  export interface GamificationConfig {
    id: number;
    courseId: number;
    linkedAdapter: string;
    displayedDash: boolean;
    milestone: number;
    pointReset: string;
    scoreboard: boolean;
  }

  // Object specific backend gamification
  export interface GameConfig{
    displayedDash: boolean;
    milestone: number;
    pointReset: string;
    scoreboard: boolean;
  }

  // Object complete backend knowledge progress
  export interface KnowledgeConfig {
    id: number;
    courseId: number;
    linkedAdapter: string;
    displayedDash: boolean;
    colorSuccess: string;
    colorInProgress: string;
    colorUpcoming: string;
  }

  // Object specific backend knowledge progress
  export interface KnowConfig{
    displayedDash: boolean;
    colorSuccess: string;
    colorInProgress: string;
    colorUpcoming: string;
  }

  // Object complete backend quiz upload
  export interface QuizConfig {
    id: number;
    courseId: number;
    linkedAdapter: string;
    displayedDash: boolean;
    accessQuiz: boolean;
    skipQuiz: boolean;
    hint: boolean;
  }

  // Object specific backend quiz upload
  export interface QConfig{
    displayedDash: boolean;
    accessQuiz: boolean;
    skipQuiz: boolean;
    hint: boolean;
  }

  // Object complete backend video upload
  export interface VideoConfig {
    id: number;
    courseId: number;
    linkedAdapter: string;
    displayedDash: boolean;
    accessVideo: boolean;
    skipVideo: boolean;
    pauseVideo: boolean;
  }

  // Object specific backend video upload
  export interface VConfig{
    displayedDash: boolean;
    accessVideo: boolean;
    skipVideo: boolean;
    pauseVideo: boolean;
  }

  // Object complete backend matching exercise
  export interface MatchingConfig {
    id: number;
    courseId: number;
    linkedAdapter: string;
    displayedDash: boolean;
    timeMatching: number;
    layout: string;
    hint: boolean;
  }

  // Object specific backend matching exercise
  export interface MatchConfig{
    displayedDash: boolean;
    timeMatching: number;
    layout: string;
    hint: boolean;
  }