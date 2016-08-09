import * as treant from './@treantjs/core';
import * as engine from './@treantjs/engine-virtual-dom';
import createDirectives from './@treantjs/adapter-angular';

import createCheckboxes from './@coorpacademy/components/molecule/checkboxes/';
import createDisciplineCard from './@coorpacademy/components/molecule/discipline-card/';
import createModuleBubble from './@coorpacademy/components/molecule/module-bubble/';
import createSelectBox from './@coorpacademy/components/molecule/select-box/';
import createThemeImage from './@coorpacademy/components/molecule/theme-image/';
import createDisciplineCards from './@coorpacademy/components/organism/discipline-cards/';
import createHero from './@coorpacademy/components/organism/hero/';

const factories = {
  createCheckboxes,
  createDisciplineCard,
  createModuleBubble,
  createSelectBox,
  createThemeImage,
  createDisciplineCards,
  createHero
};

const setup = app => {
  createDirectives(app, treant, engine, factories);
};

module.exports = {setup};
