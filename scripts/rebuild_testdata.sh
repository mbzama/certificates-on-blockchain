#!/bin/bash
docker stop mysql
docker rm mysql
docker-compose   build  --no-cache  mysqldb
docker-compose up -d mysqldb