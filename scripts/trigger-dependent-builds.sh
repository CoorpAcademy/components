#!/bin/sh
set -e

echo "About to trigger dependent builds"
for build in api-progression:master app-backoffice:master coorpacademy-cockpit:master coorpacademy:master
do
    echo "Triggering build for Coorpacademy/${build%:*}"
     curl -s -X POST -H "Content-Type: application/json" -H "Accept:application/json" -H "Travis-API-Version: 3" \
      -H "Authorization: token $TRAVIS_TOKEN" -d '{"request":{"branch":"'${build#*:}'"}}' \
      https://api.travis-ci.com/repo/CoorpAcademy%2F${build%:*}/requests
done