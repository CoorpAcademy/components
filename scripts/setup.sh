#!/usr/bin/env bash

CURRENT_FOLDER="$(basename $(pwd))"
if [ "$CURRENT_FOLDER" != "components" ]; then
  echo "Please run this component repo root"
  exit 1
fi

# so far simple shortcut
source packages/@coorpacademy-components/scripts/load-font-awesome-token.sh $@
