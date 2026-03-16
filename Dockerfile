FROM eclipse-temurin:21-jdk AS build
WORKDIR /app

# Copy Maven wrapper and build files first for better layer caching
COPY .mvn .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw

# Pre-download dependencies
RUN ./mvnw -q -DskipTests dependency:go-offline

# Copy source and build the executable jar
COPY src src
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
CMD ["sh", "-c", "java -Dserver.port=${PORT:-8080} -jar app.jar"]
