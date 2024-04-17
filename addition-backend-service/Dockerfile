# Use an OpenJDK 8 JRE base image
FROM openjdk:8-jre-alpine

# Set the working directory
ARG JAR_FILE=target/*.jar
WORKDIR /app

# Copy the JAR file to the working directory
COPY ${JAR_FILE} ./

# Set the command to run the JAR file
ENTRYPOINT ["java","-jar","/app/target/calculator-service.jar"]

# Expose the port that the application will run on
EXPOSE 8080