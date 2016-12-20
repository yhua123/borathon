#!/bin/bash
set -e

docker load -i ./borathonimage.tgz
docker-compose up -d
