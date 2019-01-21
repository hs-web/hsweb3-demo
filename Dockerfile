FROM java:8

COPY target/hsweb-demo.jar /app.jar
COPY hsweb-ui /hsweb-ui
#COPY data /data
COPY config /config
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
