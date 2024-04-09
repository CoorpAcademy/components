#!/usr/bin/env bash

TOP_LEVEL_DIR=$(dirname $(dirname $(readlink -f -- "$0")))

# so far simple shortcut
source $TOP_LEVEL_DIR/packages/@coorpacademy-components/scripts/load-font-awesome-token.sh
