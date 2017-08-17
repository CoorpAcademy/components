#!/bin/bash
#
# configure for private packages
npm config set //registry.npmjs.org/:_authToken $NPM_TOKEN
npm config set @coorpacademy:registry http://registry.npmjs.org/
yarn config set registry https://registry.npmjs.org/
