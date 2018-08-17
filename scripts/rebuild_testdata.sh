#!/bin/bash
docker-compose   build  --no-cache  mysqldb
docker-compose up -d mysqldb

