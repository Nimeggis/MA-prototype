CREATE SCHEMA course;
USE course;
CREATE TABLE `courses` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `Description` varchar(1000) DEFAULT NULL,
  `Start` date DEFAULT NULL,
  `End` date DEFAULT NULL,
  `Adapter` varchar(1000) DEFAULT NULL,
  `fieldofstudy` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE SCHEMA courseConfig;
USE courseConfig;
CREATE TABLE `config` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `courseID` int DEFAULT NULL,
  `linked_adapter` varchar(100) DEFAULT NULL,
  `is_displayed_dash` boolean DEFAULT NULL,
  `period_length` varchar(100) DEFAULT NULL,
  `period_start` varchar(100) DEFAULT NULL,
  `warning` boolean DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE SCHEMA flashcardsConfig;
USE flashcardsConfig;
CREATE TABLE `config` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `courseID` int DEFAULT NULL,
  `linked_adapter` varchar(100) DEFAULT NULL,
  `is_displayed_dash` boolean DEFAULT NULL,
  `time_flashcard` int DEFAULT NULL,
  `days_repetition` int DEFAULT NULL,
  `hint` boolean DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE SCHEMA gamificationConfig;
USE gamificationConfig;
CREATE TABLE `config` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `courseID` int DEFAULT NULL,
  `linked_adapter` varchar(100) DEFAULT NULL,
  `is_displayed_dash` boolean DEFAULT NULL,
  `milestone` int DEFAULT NULL,
  `point_reset` varchar(100) DEFAULT NULL,
  `scoreboard` boolean DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE SCHEMA knowledgeConfig;
USE knowledgeConfig;
CREATE TABLE `config` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `courseID` int DEFAULT NULL,
  `linked_adapter` varchar(100) DEFAULT NULL,
  `is_displayed_dash` boolean DEFAULT NULL,
  `color_success` varchar(100) DEFAULT NULL,
  `color_in_progress` varchar(100) DEFAULT NULL,
  `color_upcoming` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE SCHEMA matchingConfig;
USE matchingConfig;
CREATE TABLE `config` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `courseID` int DEFAULT NULL,
  `linked_adapter` varchar(100) DEFAULT NULL,
  `is_displayed_dash` boolean DEFAULT NULL,
  `time_matching` int DEFAULT NULL,
  `layout` varchar(100) DEFAULT NULL,
  `hint` boolean DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE SCHEMA quizConfig;
USE quizConfig;
CREATE TABLE `config` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `courseID` int DEFAULT NULL,
  `linked_adapter` varchar(100) DEFAULT NULL,
  `is_displayed_dash` boolean DEFAULT NULL,
  `access_quiz` boolean DEFAULT NULL,
  `skip_quiz` boolean DEFAULT NULL,
  `hint` boolean DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE SCHEMA videoConfig;
USE videoConfig;
CREATE TABLE `config` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `courseID` int DEFAULT NULL,
  `linked_adapter` varchar(100) DEFAULT NULL,
  `is_displayed_dash` boolean DEFAULT NULL,
  `access_video` boolean DEFAULT NULL,
  `skip_video` boolean DEFAULT NULL,
  `pause_video` boolean DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE SCHEMA adapter;
USE adapter;
CREATE TABLE `adapter` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `Description` varchar(1000) DEFAULT NULL,
  `create_content` bit(1) DEFAULT NULL,
  `compatible_adapter` varchar(100) DEFAULT NULL,
  `short_name` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `adapter` (`ID`, `Name`, `Description`, `create_content`, `compatible_adapter`, `short_name`) VALUES (2,'Gamification','This Adapter provides a Gamification system for the students, that they become more motivated for the course.',_binary '\0','3,4,5,7,12','GM'),(3,'Video Upload','This Adapter provides the possibility to upload any kind of videos.',_binary '','2,5,8','VI'),(4,'Quiz Upload','This Adapter provides the possibility to upload any kind of quizzes.',_binary '','2,5,8','QU'),(5,'Course Timeline','This Adapter provides the possibility to structure the course and to plan and organize uploaded content.',_binary '\0','2,3,4,7,8,12','CT'),(6,'Interactive Chat','This Adapter provides students both a synchronous and asynchronous chat while watching a video or working on quizzes.',_binary '\0',NULL,'IC'),(7,'Flashcards','This Adapter provides students a repetitive learning style, that they have to learn and repeat already learned material to improve in the course.',_binary '','2,5,8','FC'),(8,'Knowledge Progress','This Adapter provides students special statistics about their performance in the course as well as details about areas where they can improve themself.',_binary '\0','3,4,5,7,12','KP'),(9,'Group Assignments','This Adapter provides students the possibility to create groups and to work together on learning material as well as to submit assignments as a group.',_binary '',NULL,'GA'),(10,'Video Meeting','This Adapter provides the possibility to have a live video meeting within the platform so content which is uploaded in the plattform can be directly used and distributed to all students.',_binary '',NULL,'VM'),(11,'Advanced Notifications','This Adapter provides the possibility to notify students when they have task not done or if they\'re late. This adapter is more like an enhancement for other adapters.',_binary '\0',NULL,'AN'),(12,'Matching Exercise','This adapter provides students with a learning task in which they have to match vocabulary words and their translations, thus improving their own vocabulary.',_binary '','2,5,8','ME');