#!/usr/bin/env zsh
set -e

token_file="tmp/font-awesome-token"

if [ -n "$FONTAWESOME_NPM_AUTH_TOKEN" ]; then
  token=$(echo $FONTAWESOME_NPM_AUTH_TOKEN) # this is notably to load in CI without AWS access
elif [ -f "$token_file" ]; then
  token=$(cat $token_file)
else
  mkdir -p tmp

  token=$(aws ssm get-parameter --name "/credentials/global/font-awesome/token" --output text --query Parameter.Value \
  | tr -d '\n' \
  | tee $token_file
  )
fi

if [[ $ZSH_EVAL_CONTEXT == "toplevel:file" ]]; then
    # if file is sourced, load the var also and print a message about it
    export FONTAWESOME_NPM_AUTH_TOKEN=$(cat $token_file)
    echo "Fontawesome token loaded in FONTAWESOME_NPM_AUTH_TOKEN var"
else
    echo -n "$token"
fi

set +e
