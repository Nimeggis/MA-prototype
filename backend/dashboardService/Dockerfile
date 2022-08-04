FROM openjdk:11
MAINTAINER Niklas Meissner <niklas.meissner@niklas-meissner.de>
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} dashboardService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/dashboardService-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080