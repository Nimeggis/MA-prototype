import { InjectionToken } from "@angular/core";

export interface EnvironmentConfig {
    environment: {
      baseUrl: string;
    };
    adapter: {
        baseUrl: string;
    };
    course: {
        baseUrl: string;
    };
    dashboard: {
        baseUrl: string;
    };
    courseConfiguration: {
      baseUrl: string;
    };
    flashcardsConfiguration: {
        baseUrl: string;
    };
    gamificationConfiguration: {
        baseUrl: string;
    };
    knowledgeConfiguration: {
      baseUrl: string;
    };
    quizConfiguration: {
      baseUrl: string;
    };
    videoConfiguration: {
      baseUrl: string;
    };
    matchingConfiguration: {
      baseUrl: string;
    };
  }
  
  export const ENV_CONFIG = new InjectionToken<EnvironmentConfig>('EnvironmentConfig');