echo "Applying links for flow on each package"

echo "progression-engine >"
engine_fuzzy=packages/@coorpacademy-progression-engine/node_modules/fuzzy-matching
echo "  linking $engine_fuzzy"
rm -rf $engine_fuzzy
ln -s ../../../node_modules/fuzzy-matching $engine_fuzzy

engine_ava=packages/@coorpacademy-progression-engine/node_modules/ava
echo "  linking $engine_ava"
rm -rf $engine_ava
ln -s ../../../node_modules/ava $engine_ava

echo "player-services >"
services_ava=packages/@coorpacademy-player-services/node_modules/ava
echo "   linking $services_ava"
rm -rf $services_ava
ln -s ../../../node_modules/ava $services_ava

services_engine=packages/@coorpacademy-player-services/node_modules/@coorpacademy/progression-engine
echo "   linking $services_engine"
rm -rf packages/@coorpacademy-player-services/node_modules/@coorpacademy
mkdir packages/@coorpacademy-player-services/node_modules/@coorpacademy
ln -s ../../../@coorpacademy-progression-engine $services_engine
