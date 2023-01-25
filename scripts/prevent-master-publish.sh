BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$BRANCH" != "master" ]]; then
  echo "Aborting publish process, can't publish while checked-out in $BRANCH, you need to be checked out @ master.";
  exit 1;
fi

echo "On $BRANCH, procedding to publish.";
nvm use
yarn && yarn bootstrap
