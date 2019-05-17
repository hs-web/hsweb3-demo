FROM openjdk:8

COPY target/hsweb-demo.jar /app.jar
COPY hsweb-ui /hsweb-ui
COPY docker-entrypoint.sh /
#COPY data /data
COPY config /config
EXPOSE 8080
ENTRYPOINT ["/docker-entrypoint.sh"]
