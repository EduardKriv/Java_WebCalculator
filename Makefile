start: build run

build:
	./mvnw clean compile package
run:
	./mvnw spring-boot:run
