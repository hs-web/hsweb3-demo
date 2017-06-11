FROM java:8

COPY target/hsweb-demo.jar /app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
