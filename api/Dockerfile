FROM amazoncorretto:17-alpine
WORKDIR /app
COPY /api/build/libs/ourhub-api-1.0.0.jar ourhub-api-1.0.0.jar
EXPOSE 8080
CMD ["java", "-jar", "ourhub-api-1.0.0.jar"]
