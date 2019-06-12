#!/usr/bin/env bash
mvn -Dgit-commit-id=$(git rev-parse HEAD) clean package -DskipTests
docker rmi registry.cn-shenzhen.aliyuncs.com/zmcsoft/hsweb-antd
docker build -t registry.cn-shenzhen.aliyuncs.com/zmcsoft/hsweb-antd -f ./Dockerfile .
docker push registry.cn-shenzhen.aliyuncs.com/zmcsoft/hsweb-antd
