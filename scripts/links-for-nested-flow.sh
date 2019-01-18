echo "Applying links for flow on each package"

echo "progression-engine >"
engine_fuzzy=packages/@coorpacademy-progression-engine/node_modules/fuzzy-matching
engine_ava=packages/@coorpacademy-progression-engine/node_modules/ava

echo "  cleanup"
rm -rf $engine_fuzzy
rm -rf $engine_ava

echo "  linking $engine_fuzzy"
ln -s ../../../node_modules/fuzzy-matching $engine_fuzzy

echo "  linking $engine_ava"
ln -s ../../../node_modules/ava $engine_ava




echo "player-services >"
services_ava=packages/@coorpacademy-player-services/node_modules/ava
services_engine=packages/@coorpacademy-player-services/node_modules/@coorpacademy/progression-engine

echo "  cleanup"
rm -rf $services_ava
rm -rf packages/@coorpacademy-player-services/node_modules/@coorpacademy
mkdir packages/@coorpacademy-player-services/node_modules/@coorpacademy

echo "  linking $services_ava"
ln -s ../../../node_modules/ava $services_ava

echo "  linking $services_engine"
ln -s ../../../@coorpacademy-progression-engine $services_engine





echo "player-store >"
store_engine=packages/@coorpacademy-player-store/node_modules/@coorpacademy/progression-engine
store_redux_task=packages/@coorpacademy-player-store/node_modules/@coorpacademy/redux-task

echo "  cleanup"
rm -rf packages/@coorpacademy-player-store/node_modules/@coorpacademy
mkdir packages/@coorpacademy-player-store/node_modules/@coorpacademy

echo "  linking $store_engine"
ln -s ../../../@coorpacademy-progression-engine $store_engine

echo "  linking $store_redux_task"
ln -s ../../../@coorpacademy-redux-task $store_redux_task
