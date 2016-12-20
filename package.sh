#!/bin/bash
set -e

docker save -o borathonimage.tgz findserver:0.1 rsserver:0.1 uiserver:0.1
tar -zcvf borathon.tgz docker-compose.yaml install.sh borathonimage.tgz
