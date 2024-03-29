#!/usr/bin/env zsh
set -e

token_file="tmp/font-awesome-token"

if [ -f "$token_file" ]; then
  cat $token_file
else
  mkdir -p tmp
  aws ssm get-parameter --name "/credentials/global/font-awesome/token" --output text --query Parameter.Value \
  | tr -d '\n' \
  | tee $token_file
fi
