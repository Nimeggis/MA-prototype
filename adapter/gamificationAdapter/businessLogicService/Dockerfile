FROM openjdk:11
MAINTAINER Niklas Meissner <niklas.meissner@niklas-meissner.de>
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} businessLogicService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/businessLogicService-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080